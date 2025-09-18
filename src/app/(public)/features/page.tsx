import React from "react";

function Features() {
  return (
    <main className="min-h-screen max-w-screen bg-white">
      <section className="bg-white p-6">
        <h1 className="text-2xl font-bold">Features</h1>

        <p className="mt-4 text-gray-700">
          Explore the features of our application.
        </p>
      </section>
      <section className="p-6 w-full">
        <h2 className="text-4xl text-center mb-10">
            Step by Step Guide to Using yourTrainer
        </h2>
        <ul className="mt-4">
          {[
            {
              title: "User Management",
              description: "Manage users and their roles effectively.",
            },
            {
              title: "Training Plans",
              description: "Create and manage personalized training plans.",
            },
            {
              title: "Nutrition Tracking",
              description: "Track nutrition and dietary plans.",
            },
            {
              title: "Progress Analytics",
              description: "Analyze user progress with detailed reports.",
            },
            {
              title: "Notifications",
              description: "Send notifications and reminders to users.",
            },
            {
              title: "Calendar Integration",
              description: "Integrate with calendar for scheduling.",
            },
            {
              title: "Payment Processing",
              description: "Handle payments and subscriptions securely.",
            },
            {
              title: "Feedback System",
              description: "Collect feedback from users to improve services.",
            },
            {
              title: "Support System",
              description: "Provide support and assistance to users.",
            },
            {
              title: "Mobile Compatibility",
              description: "Access features on mobile devices.",
            },
            {
              title: "Data Security",
              description: "Ensure data security and privacy compliance.",
            },
            {
              title: "Customizable Dashboard",
              description: "Personalize the dashboard for each user    ",
            },
            {
              title: "Multi-language Support",
              description: "Support multiple languages for global users.",
            },
            {
              title: "API Access",
              description: "Provide API access for third-party integrations.",
            },
            {
              title: "User Analytics",
              description: "Analyze user behavior and engagement metrics.",
            },
            {
              title: "Content Management",
              description: "Manage content and resources effectively.",
            },
            {
              title: "Community Features",
              description: "Build a community with forums and discussions.",
            },
            {
              title: "Gamification",
              description:
                "Incorporate gamification elements to enhance user engagement.",
            },
            {
              title: "Performance Tracking",
              description: "Track performance metrics for users and trainers.",
            },
            {
              title: "Custom Reports",
              description: "Generate custom reports based on user data.",
            },
            {
              title: "Integration with Wearables",
              description:
                "Integrate with wearable devices for health tracking.",
            },
            {
              title: "Social Media Sharing",
              description: "Enable sharing of achievements on social media.",
            },
            {
              title: "Offline Access",
              description: "Allow offline access to certain features.",
            },
            {
              title: "User Roles and Permissions",
              description:
                "Define roles and permissions for different user types.",
            },
            {
              title: "Real-time Notifications",
              description: "Send real-time notifications to users.",
            },
            {
              title: "Customizable UI",
              description: "Allow users to customize the user interface.",
            },
            {
              title: "Analytics Dashboard",
              description: "Provide an analytics dashboard for insights.",
            },
            {
              title: "Training Resources",
              description: "Offer training resources and materials.",
            },
            {
              title: "Event Management",
              description: "Manage events and workshops effectively.",
            },
            {
              title: "User Engagement Tools",
              description: "Tools to enhance user engagement and retention.",
            },
            {
              title: "Feedback and Surveys",
              description: "Collect feedback and conduct surveys easily.",
            },
            {
              title: "Collaboration Tools",
              description: "Enable collaboration between users and trainers.",
            },
            {
              title: "Custom Branding",
              description: "Allow custom branding for organizations.",
            },
            {
              title: "Data Export",
              description: "Export data in various formats for analysis.",
            },
            {
              title: "User Onboarding",
              description: "Streamline user onboarding process.",
            },
            {
              title: "Accessibility Features",
              description: "Ensure accessibility for all users.",
            },
            {
              title: "Performance Optimization",
              description: "Optimize performance for a smooth user experience.",
            },
            {
              title: "Scalability",
              description: "Ensure the application can scale with user growth.",
            },
            {
              title: "Support for Multiple Devices",
              description: "Support access from various devices and platforms.",
            },
            {
              title: "Custom Notifications",
              description: "Allow users to customize notification preferences.",
            },
            {
              title: "Data Backup",
              description: "Regular data backups to prevent data loss.",
            },
            {
              title: "User Activity Logs",
              description: "Maintain logs of user activities for auditing.",
            },
            {
              title: "Integration with Third-party Services",
              description: "Integrate with popular third-party services.",
            },
            {
              title: "Advanced Search",
              description: "Implement advanced search capabilities.",
            },
            {
              title: "User Profiles",
              description:
                "Create detailed user profiles with personal information.",
            },
            {
              title: "Content Sharing",
              description: "Enable sharing of content among users.",
            },
            {
              title: "Customizable Workouts",
              description: "Allow users to create and customize workouts.",
            },
            {
              title: "Progress Sharing",
              description: "Share progress with trainers and peers.",
            },
            {
              title: "Health Tracking",
              description: "Track health metrics like heart rate, steps, etc.",
            },
            {
              title: "Virtual Training Sessions",
              description: "Conduct virtual training sessions with users.",
            },
            {
              title: "Resource Library",
              description: "Maintain a library of resources for users.",
            },
            {
              title: "User Challenges",
              description: "Create challenges to motivate users.",
            },
            {
              title: "Customizable Notifications",
              description:
                "Allow users to set custom notification preferences.",
            },
            {
              title: "Data Visualization",
              description: "Visualize data with charts and graphs.",
            },
            {
              title: "User Feedback Loop",
              description:
                "Implement a feedback loop for continuous improvement.",
            },
            {
              title: "Integration with Fitness Trackers",
              description: "Integrate with popular fitness trackers.",
            },
            {
              title: "Social Features",
              description: "Enable social interactions among users.",
            },
            {
              title: "Customizable Goals",
              description: "Allow users to set and track customizable goals.",
            },
            {
              title: "Training History",
              description: "Maintain a history of training sessions.",
            },
            {
              title: "User Engagement Analytics",
              description: "Analyze user engagement metrics.",
            },
            {
              title: "Customizable Dashboards",
              description: "Allow users to customize their dashboards.",
            },
            {
              title: "Multi-device Syncing",
              description: "Sync data across multiple devices seamlessly.",
            },
            {
              title: "User Support System",
              description: "Provide a support system for user queries.",
            },
            {
              title: "Content Recommendations",
              description: "Recommend content based on user preferences.",
            },
            {
              title: "Training Calendar",
              description: "Maintain a calendar for training schedules.",
            },
            {
              title: "User Notifications",
              description: "Send notifications for important updates.",
            },
          ].map((feature, index) => (
            <li key={index} className="bg-white p-4 hidden rounded shadow mb-4">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </li>
          ))}

          <li className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-start items-end pr-24">
              <div className="bg-gray-100 p-1 px-3 rounded-full">Step 1:</div>
              <h2 className="text-purple-600 text-2xl">Danışanları Yönetin</h2>
            </div>

            <div className=" text-black text-lg border-l-4 h-72 relative pl-24 w-8/12">
              <div className="absolute top-0 -left-3.5  bg-black h-6 w-6 rounded-full " />
              <div className="absolute top-0 -left-1  bg-black h-9/12 w-1" />
              İlk adım, tüm danışanlarınızı Piti&apos;ye kaydetmektir. İletişim
              bilgilerini, hedeflerini, sağlık geçmişini ve özel notları tek bir
              merkezde toplayın. Böylece her danışanın durumuna ve ihtiyaçlarına
              hızlıca erişebilir, onlara özel yaklaşımlar geliştirebilirsiniz.
            </div>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-start items-end pr-24 ">
              <div className="bg-gray-100 p-1 px-3 rounded-full">Step 2:</div>
              <h2 className="text-green-600 text-2xl">
                Antrenman ve Beslenme Planları Oluşturun
              </h2>
            </div>
            <div className=" text-black text-lg border-l-4 h-72 relative pl-24 w-8/12">
              <div className="absolute top-0 -left-3.5  bg-white border-3 border-black h-6 w-6 rounded-full " />
              <div className="absolute top-0 -left-1  w-1" />
              Piti, danışanlarınız için kişiselleştirilmiş antrenman ve beslenme
              planları oluşturmanıza olanak tanır. Antrenman programlarını,
              beslenme önerilerini ve hedef takibini kolayca yapabilirsiniz.
              Böylece danışanlarınızın hedeflerine ulaşmalarını
              destekleyebilirsiniz.
            </div>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-start items-end pr-24 ">
              <div className="bg-gray-100 p-1 px-3 rounded-full">Step 3:</div>
              <h2 className="text-blue-600 text-2xl"> İletişim ve Takip</h2>
            </div>
            <div className=" text-black text-lg border-l-4 h-72 relative pl-24 w-8/12">
              <div className="absolute top-0 -left-3.5  bg-white border-3 border-black h-6 w-6 rounded-full " />
              <div className="absolute top-0 -left-1  w-1" />
              Danışanlarınızla sürekli iletişimde kalın. Piti, mesajlaşma, video
              görüşme ve dosya paylaşımı gibi araçlarla danışanlarınızla
              etkileşimi artırır. Antrenman ve beslenme ilerlemelerini takip
              edin, geri bildirim verin ve motivasyonlarını yüksek tutun.
            </div>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-start items-end pr-24 ">
              <div className="bg-gray-100 p-1 px-3 rounded-full">Step 4:</div>
              <h2 className="text-orange-600 text-2xl">Performans Analizi
              </h2>
            </div>
            <div className=" text-black text-lg border-l-4 h-72 relative pl-24 w-8/12">
              <div className="absolute top-0 -left-3.5  bg-white border-3 border-black h-6 w-6 rounded-full " />
              <div className="absolute top-0 -left-1  w-1" />
              Danışanlarınızın performansını düzenli olarak analiz edin. Piti,
              antrenman ve beslenme verilerini grafiklerle görselleştirir,
              böylece gelişimlerini net bir şekilde görebilirsiniz. Bu sayede
              hangi alanlarda iyileştirme yapmanız gerektiğini
              belirleyebilirsiniz.
            </div>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-start items-end pr-24 ">
              <div className="bg-gray-100 p-1 px-3 rounded-full">Step 5:</div>
              <h2 className="text-yellow-600 text-2xl">
                Raporlama ve Geri Bildirim
              </h2>
            </div>
            <div className=" text-black text-lg border-l-4 h-72 relative pl-24 w-8/12">
              <div className="absolute top-0 -left-3.5  bg-white border-3 border-black h-6 w-6 rounded-full " />
              <div className="absolute top-0 -left-1  w-1" />
              Danışanlarınıza düzenli olarak raporlar sunun. Piti, antrenman ve
              beslenme verilerini analiz ederek kişiye özel raporlar oluşturur.
              Bu raporlar, danışanlarınızın ilerlemesini görselleştirir ve
              onlara motivasyon sağlar.
            </div>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-start items-end pr-24 ">
              <div className="bg-gray-100 p-1 px-3 rounded-full">Step 6:</div>
              <h2 className="text-pink-400 text-2xl">
Sürekli Eğitim ve Gelişim
              </h2>
            </div>
            <div className=" text-black text-lg border-l-4 h-72 relative pl-24 w-8/12">
              <div className="absolute top-0 -left-3.5  bg-white border-3 border-black h-6 w-6 rounded-full " />
              <div className="absolute top-0 -left-1  w-1" />
              Piti, sürekli eğitim ve gelişim için kaynaklar sunar. Yeni
              antrenman teknikleri, beslenme trendleri ve motivasyon
              stratejileri hakkında güncel bilgilere erişebilirsiniz. Bu sayede
              kendinizi sürekli olarak geliştirebilir ve danışanlarınıza en iyi
              hizmeti sunabilirsiniz.
            </div>
          </li>
        </ul>
      </section>

              <h2 className="text-4xl text-center mb-10">
          Discover the <b>unique features</b> <br /> that make our application
          stand out
        </h2>
    </main>
  );
}

export default Features;
