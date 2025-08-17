'use client'
import communityImg from '@/public/images/community-image.jpg'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import teamMemberData from '@/data/teamMemberData.json'

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const peterData = teamMemberData.find((member) => member.id === 'peter')
  const linkedinUrl = peterData?.socialLinks.linkedin || '#'
  const resumeUrl = peterData?.socialLinks.resume || '#'

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xzzvqvpw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mb-12 md:mb-20">
              Growing <span className="font-instrument italic">together.</span> <br />
              As a community.
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <RevealWrapper className="col-span-full flex flex-col items-start justify-center gap-x-4 border p-6 dark:border-dark max-md:gap-y-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-md:block max-md:w-full">
              <h3 className="mb-8 leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
                Join my mentorship community of <br />
                designers and AI enthusiasts
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="rv-button rv-button-secondary block w-full text-center max-md:mx-auto md:inline-block md:w-auto">
                <div className="rv-button-top">
                  <span>Join The Waitlist</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Join The Waitlist</span>
                </div>
              </button>
            </div>
            <figure className="max-md:w-full">
              <Image src={communityImg} alt="Community Discussion" className="max-md:w-full" />
            </figure>
          </RevealWrapper>

          <RevealWrapper className="col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="rv-badge">
              <span className="rv-badge-text">Resume</span>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              View My <br className="hidden md:block" />
              Resume
            </h3>
            <Link
              target="_blank"
              href={resumeUrl}
              className="rv-button rv-button-secondary block w-[90%] max-md:mx-auto md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Resume</span>
              </div>
              <div className="rv-button-bottom">
                <span>Resume</span>
              </div>
            </Link>
          </RevealWrapper>

          <RevealWrapper className="col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="rv-badge">
              <span className="rv-badge-text">Linkedin</span>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Connect On <br />
              LinkedIn
            </h3>
            <Link
              target="_blank"
              href={linkedinUrl}
              className="rv-button rv-button-secondary block w-[90%] max-md:mx-auto md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Follow Now</span>
              </div>
              <div className="rv-button-bottom">
                <span>Follow Now</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </div>

      {/* Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-4 w-full max-w-md rounded-lg bg-backgroundBody p-6 dark:bg-dark">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-medium">Join The Waitlist</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-2xl hover:text-gray-600">
                ×
              </button>
            </div>

            <form onSubmit={handleWaitlistSubmit}>
              <div className="mb-4">
                <label htmlFor="waitlist-email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="waitlist-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border bg-backgroundBody px-3 py-2 focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 text-center text-green-600 dark:text-green-400">
                  Thank you! You've been added to the waitlist.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 text-center text-red-600 dark:text-red-400">
                  Sorry, there was an error. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary px-4 py-2 text-white hover:bg-primary/90 disabled:opacity-50">
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Community
