"use client";
import React from "react";
// Removed CommentSection import
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed blogs import

export default function BlogDetails({ blog }) {
  return (
    <section className="section-blog-details">
      <div className="tf-container">
        <div className="row">
          {/* Changed column width and removed sidebar */}
          <div className="col-lg-12">
            <div className="heading">
              <h2 className="title-heading">{blog.title.replace('{Location}', siteContent.agent.location)}</h2>
              <div className="meta flex">
                <div className="meta-item flex align-center">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75"
                      stroke="#A8ABAE"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
                      stroke="#A8ABAE"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-color-primary">{siteContent.agent.name}</p>
                </div>
                {/* Removed Category Metadata */}
                <div className="meta-item flex align-center">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.925 15C7.35643 15.7343 9.00306 15.9332 10.5682 15.5609C12.1333 15.1885 13.5139 14.2694 14.4613 12.9692C15.4087 11.6689 15.8606 10.0731 15.7354 8.46916C15.6103 6.86524 14.9164 5.35876 13.7789 4.22118C12.6413 3.0836 11.1348 2.38972 9.53088 2.2646C7.92697 2.13947 6.3311 2.59132 5.03086 3.53872C3.73063 4.48612 2.81152 5.86677 2.43917 7.43187C2.06682 8.99697 2.26571 10.6436 3 12.075L1.5 16.5L5.925 15Z"
                      stroke="#A8ABAE"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>0 comment</p>
                </div>
                <div className="meta-item flex align-center">
                  <p>26 August, 2024</p>
                </div>
              </div>
            </div>
            {/* Removed placeholder paragraph1 - Assuming blog.content will be passed */}
            {/* If blog prop doesn't contain full content, this needs adjustment */}
            <p className="fw-5 text-color-heading mb-30">
              {blog.fullContent || siteContent.blog.detailPlaceholder.paragraph1} {/* Example fallback */}
            </p>
            <div className="image-wrap mb-30">
              <Image
                className="lazyload"
                data-src="/images/blog/blog-details.jpg"
                alt=""
                width={840}
                height={473}
                src="/images/blog/blog-details.jpg"
              />
            </div>
            <div className="wrap-content mb-20">
              <h4 className="mb-18">Understanding Housing Stocks</h4>
              {/* Removed placeholder paragraph2 and hardcoded text */}
              {/* Assuming blog.content or similar field exists in the blog object */}
              <p className="mb-20">
                 {blog.fullContentSection2 || siteContent.blog.detailPlaceholder.paragraph2} {/* Example fallback */}
              </p>

            </div>
            <div className="quote">
              <p>
                “{blog.quote || siteContent.blog.detailPlaceholder.quote}” {/* Example fallback */}
              </p>
              <p className="author">
                {blog.quoteAuthor || siteContent.blog.detailPlaceholder.quoteAuthor} {/* Example fallback */}
              </p>
            </div>
            <div className="group-image">
              <div className="image-wrap">
                <Image
                  className="lazyload"
                  data-src="/images/blog/blog-details-1.jpg"
                  alt=""
                  width={410}
                  height={273}
                  src="/images/blog/blog-details-1.jpg"
                />
              </div>
              <div className="image-wrap">
                <Image
                  className="lazyload"
                  data-src="/images/blog/blog-details-2.jpg"
                  alt=""
                  width={410}
                  height={273}
                  src="/images/blog/blog-details-2.jpg"
                />
              </div>
            </div>
            <div className="wrap-content mb-30">
              <h4 className="mb-16 font-manrope">Identify Emerging Trends</h4>
              {/* Removed placeholder paragraph3 */}
              {/* Assuming blog.content or similar field exists */}
              <p className="mb-22">
                 {blog.fullContentSection3 || siteContent.blog.detailPlaceholder.paragraph3} {/* Example fallback */}
              </p>
            </div>
            <div className="tag-wrap flex justify-between items-center">
              <div className="tags">
                <p>Tags:</p>
                <div className="tags">
                  <a href="#">Personal</a>
                  <a href="#">Business</a>
                </div>
              </div>
              <div className="wrap-social">
                <p>Share this post:</p>
                <ul className="tf-social style-1">
                  <li>
                    <a href="#">
                      <i className="icon-fb" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-X" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linked" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-ins" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Removed Comment Section */}
          </div>
          {/* Removed Sidebar Column */}
        </div>
      </div>
    </section>
  );
}
