import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { ExperienceEntry, EducationEntry, PublicationEntry } from '../components/curriculumEntry';
import { Link } from 'gatsby';
import * as icons from 'react-icons/ri';
import scrollTo from 'gatsby-plugin-smoothscroll';
import cv from '../assets/files/Software_Engineer_Resume.pdf';

const IndexPage = () => {
  return (
    <div id='home' className="mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12">
        {/* Photo and social links */}
        <div className="flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24">
          {/* Photo */}
          <StaticImage
            src="../images/avatar.jpg"
            alt="Me"
            className="rounded-full h-64 w-64 object-cover mt-4"
          />
          {/* Social links */}
          <div className='flex flex-row mx-auto place-items-center space-x-8 overflow-visible'>
            <Link href="https://www.linkedin.com/in/mavsankar" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="LinkedIn">
              <icons.RiLinkedinBoxFill size={32}></icons.RiLinkedinBoxFill>
            </Link>
            <Link href="https://github.com/mavsankar" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Github">
              <icons.RiGithubFill size={32}></icons.RiGithubFill>
            </Link>
            <Link href="https://www.twitter.com/mavsankar" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Twitter">
              <icons.RiTwitterFill size={32}></icons.RiTwitterFill>
            </Link>
            {/* <Link href="https://scholar.google.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='Google Scholar'>
              <i className="ai ai-google-scholar ai-size-32"></i>
            </Link> */}
            <Link href={cv} target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='CV'>
              <i className="ai ai-cv ai-size-32"></i>
            </Link>
          </div>

          {/* Quick links */}
          <div className='hidden lg:flex flex-col w-1/3 items-start'>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#experience")} className='peer group-hover:underline'>Experience</button>
            </div>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#education")} className='peer group-hover:underline'>Education</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#publications")} className='peer hover:underline'>Publications</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#contact")} className='peer hover:underline'>Contact</button>
            </div>
          </div>
        </div>

        {/* Text and content */}
        <div className="container flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Hi, I'm Sankar!</h1>

          <p className="mb-4">
            I am a Software Engineer II at Microsoft, passionate about building scalable and reliable systems.
            I have worked on the design and development of high-scale APIs using .NET and Azure technologies for projects like Repair and Warranty processes of Microsoft Devices and Testing Platform.
            Implemented scalable solutions that boosted system performance for large-scale applications.
          </p>

          <p className="mb-4">
            In my free time, I enjoy playing chess and watching anime. Recently, I have been exploring the world of Machine Learning and AI.
            I also started writing technical blogs, please check it out and let me know your thoughts.
          </p>

          {/* Timeline */}
          <section>
            <div id="experience" className='-translate-y-16' />
            <h1 className='text-2xl py-4 font-medium'>Experience</h1>
            <ExperienceEntry
              date={'Feb\u00a02023 - Present  '}
              title={'Software Engineer II'}
              company={'Microsoft'}
              description={'Hyderabad, India'}
              tags={[]}
            />
            <ExperienceEntry
              date={'Jul\u00a02020 - Feb\u00a02023'}
              title={'Software Engineer'}
              company={'Microsoft'}
              description={'Hyderabad, India'}
              tags={[]}
            />
            <ExperienceEntry
              date={'Oct\u00a02019 - Jun\u00a02020'}
              title={'Research Intern'}
              company={'Datafoundry.ai'}
              description={'Chennai, India'}
              tags={[]}
            />
            <ExperienceEntry
              date={'May\u00a02019 - Oct\u00a02019'}
              title={'Software Development Intern'}
              company={'Microsoft'}
              description={'Hyderabad, India'}
              tags={[]}
            />
          </section>

          <section>
            <div id="education" className='-translate-y-16' />
            <h1 className='text-2xl py-4 font-medium'>Education</h1>
            <EducationEntry
              date={'2023 - Ongoing'}
              university={'Bits Pilani'}
              degree={'M.Tech'}
              description={'Software Sytems'}
              tags={[]}
            />
            <EducationEntry
              date={'2016 - 2020'}
              university={'IIITDM Kancheepuram'}
              degree={'B.Tech (Honours)'}
              description={'Computer Engineering'}
              tags={[]}
            />
          </section>

          <section>
            <div id="publications" className='-translate-y-16' />
            <h1 className='text-2xl py-4 font-medium'>Publications</h1>
            <PublicationEntry
              date={'2021'}
              title={'Prediction of Adverse Drug Reactions Using Drug Convolutional Neural Networks'}
              authors={''}
              journal={'Journal of Bioinformatics and Computational Biology'}
              tags={['DOI:  https://doi.org/10.1142/S0219720020500468']}
            />
            {/* <PublicationEntry
              date={'2022'}
              title={'Publication 1'}
              authors={'Author 1, Author 2, Author 3'}
              journal={'Journal 1'}
              tags={['Keyword 1', 'Keyword 2', 'Keyword 3']}
            /> */}
          </section>

          <section id="contact">
            <div id="contact" className='-translate-y-16' />
            <h1 className='text-2xl py-4 font-medium'>Contact</h1>
            <p>
              If you are interested in discussing, please feel free to reach out ! You can contact me at any of the social links mentioned.              
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage