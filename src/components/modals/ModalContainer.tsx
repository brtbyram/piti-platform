"use client";

import { useEffect, useRef } from "react";
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { closeModal } from "@/redux/slices/modalSlice";
import LoginModal from "./auth/LoginModal";
import MessagesModal from "./MessagesModal";
import NotificationsModal from "./NotificationsModal";
// Registry (modal id → component)
const MODAL_COMPONENTS: Record<string, React.ComponentType<any>> = {
  login: LoginModal,
  messages: MessagesModal,
  notifications: NotificationsModal,
};

export default function ModalContainer() {
  const dispatch = useDispatch();
  const modals = useSelector((state: RootState) => state.modal.modals);

const pathname = usePathname()

  const modalRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Sayfa değiştiğinde tüm modalları kapat
    if (modals.length > 0) {
      modals.forEach(modal => {
        dispatch(closeModal(modal.id));
      });
    }
  }, [pathname, dispatch]);

  useEffect(() => {
    if (modalRef.current) {
      const handleClickOutside = (event: MouseEvent) => {
        Object.values(modalRef.current).forEach((ref) => {
          if (ref && !ref.contains(event.target as Node)) {
            dispatch(closeModal(ref.id));
          }
        });
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [dispatch]);

  if (modals.length === 0) return null;

  return (
    <>
      {modals.map((modal) => {
        const ModalComponent = MODAL_COMPONENTS[modal.id];
        if (!ModalComponent) return null; // eğer id eşleşmezse boş dön

        return (
          <div
            key={modal.id}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex items-center justify-center z-50"
          >
            <div  id={modal.id} ref={(el) => {modalRef.current[modal.id] = el}}>
              <ModalComponent {...modal.props} onClose={() => dispatch(closeModal(modal.id))}/>
            </div>
          </div>
        );
      })}
    </>
  );
}
