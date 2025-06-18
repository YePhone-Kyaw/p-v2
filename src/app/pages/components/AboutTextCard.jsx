import IconAPI from '@/components/icons/api'
import IconDatabase from '@/components/icons/db'
import IconMobileDevelopment from '@/components/icons/mobile'
import IconTesting from '@/components/icons/testing'
import IconWebDevelopment from '@/components/icons/web'
import TextCard from '@/components/TextCard'
import React from 'react'

const AboutTextCard = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-5">
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconWebDevelopment />
              </span>
            }
            title="Web Development"
          >
            Develop responsive high performance web applications using modern
            frameworks like React, Vue for frontend and Node.js, Laravel for
            backend
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconMobileDevelopment />
              </span>
            }
            title="Mobile Application Development"
          >
            Build cross-platform mobile applications using React Native,
            delivering smooth and consistent user experiences on both iOS and
            Android
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconDatabase />
              </span>
            }
            title="Database Management"
          >
            Design, implement, and optimize relational and NoSQL databases to ensure data integrity, security, and high performance for web and mobile applications.
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconAPI />
              </span>
            }
            title="API Development & Integration"
          >
           Develop robust RESTful and GraphQL APIs, and seamlessly integrate third-party services to enable efficient communication between frontend and backend systems.
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconTesting />
              </span>
            }
            title="Software Testing & Quality Assurance"
          >
           Apply automated and manual testing strategies to ensure software reliability, maintainability, and a smooth user experience across platforms.
          </TextCard>
        </div>
  )
}

export default AboutTextCard