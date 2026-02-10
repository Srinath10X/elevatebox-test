"use client";
import { useEffect } from "react";

export default function IntensiveUpgrades() {
  useEffect(() => {
    const showMoreUpgrades: any = document.querySelector(
      ".show-more-upgrades",
    )!;
    const upgradesContainer2: any = document.querySelector(
      ".upgrades-container-2",
    )!;
    const downArrow: any = document.querySelector(".down-arrow-icon")!;
    const hideShowText: any = document.querySelector(".hide-show-txt")!;

    if (!showMoreUpgrades) return;

    const handler = () => {
      showMoreUpgrades.classList.toggle("open");

      if (showMoreUpgrades.classList.contains("open")) {
        upgradesContainer2.style.display = "block";
        downArrow.style.transform = "rotate(180deg)";
        downArrow.style.transition = "all 0.4s ease";
        hideShowText.textContent = "Hide All Upgrades";
      } else {
        upgradesContainer2.style.display = "none";
        downArrow.style.transform = "rotate(0deg)";
        downArrow.style.transition = "all 0.4s ease";
        hideShowText.textContent = "Show All Upgrades";
      }
    };

    showMoreUpgrades.addEventListener("click", handler);

    return () => {
      showMoreUpgrades.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div id="intensive-upgrades" data-sectionid="sections" className="expanded">
      <div className="frame-1000004064">
        <div className="frame-1000004069">
          <div className="div-block-1831980521447267">
            <div className="div-block-1831980521447268">
              <div className="text-block-9412882480">NEW</div>
            </div>
          </div>
          <div className="we-ve-worked-with-th-3">
            The All New Intensive 3.0 Upgrades to Supercharge Your Career
          </div>
          <div className="desktop-vector">
            <div className="vectors-wrapper-163 w-embed">
              <img
                src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/2.0-upgrades-underline-vector.png"
                alt=""
                height="11px"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mobile-vector">
            <div className="vectors-wrapper-163 w-embed">
              <img
                src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mobile-underline.png"
                alt=""
                height="11px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div id="upgradesContainer" className="all-upgrades-container">
          <div id="upgradesContainer1" className="upgrades-container-1">
            <div className="frame-1000004066">
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/live-streaming-3.0-upgrades.png"
                    alt=""
                    width="80px"
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004070">
                  <div className="user-research">
                    Live Sessions (Monday to Friday)
                  </div>
                  <div className="we-take-pride-in-mak">
                    To learn coding best practices, get interview tips, discuss
                    doubts and more from experts.
                  </div>
                </div>
              </div>
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-personal-success-coach.png"
                    alt=""
                    width="80px"
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004067">
                  <div className="user-research">
                    Dedicated Success Coach for Every Student
                  </div>
                  <div className="we-take-pride-in-mak">
                    To guide you and ensure a smooth learning journey
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-1000004066">
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-placements-success-manager-icon.png"
                    width="80px"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004070">
                  <div className="user-research">Placement Success Manager</div>
                  <div className="we-take-pride-in-mak">
                    To give feedback on your interview performance and boost
                    your confidence
                  </div>
                </div>
              </div>
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-offline-drives.png"
                    alt=""
                    width="80px"
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004067">
                  <div className="user-research">
                    Mega Offline Placement Drives
                  </div>
                  <div className="we-take-pride-in-mak">
                    Once in every 3 months
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="upgradesContainer2" className="upgrades-container-2">
            <div className="frame-1000004066">
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mock-interviews.png"
                    alt=""
                    width="80px"
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004065">
                  <div className="user-research">
                    AI-Powered Mock Interviews
                  </div>
                  <div className="we-take-pride-in-mak">
                    Practice with realistic mock interviews and get tailored
                    feedback immediately
                  </div>
                </div>
              </div>
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-masterclasses.png"
                    alt=""
                    width="80px"
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004070">
                  <div className="user-research">
                    Masterclasses by Industry Experts
                  </div>
                  <div className="we-take-pride-in-mak">
                    To keep you updated with the latest trends and
                    industry-aligned
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-1000004066">
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mentorship.png"
                    alt=""
                    width="80px"
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004067">
                  <div className="user-research">
                    Mentorship from Successful Seniors
                  </div>
                  <div className="we-take-pride-in-mak">
                    Alumni from 2000+ companies to make your placement
                    preparation flawless
                  </div>
                </div>
              </div>
              <div className="frame-1000004068">
                <div className="html-embed-82606 w-embed">
                  <img
                    src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-nxt-bytes.png"
                    alt=""
                    width="80px"
                    loading="lazy"
                  />
                </div>
                <div className="frame-1000004067">
                  <div className="user-research">
                    Effortless Revision with NxtBytes
                  </div>
                  <div className="we-take-pride-in-mak">
                    Where you master key concepts through engaging reels and
                    quizzes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="show-more-intensive-3.o-upgrades"
        className="show-more-upgrades track-button"
      >
        <div className="hide-show-txt">Show all Upgrades</div>
        <div className="down-arrow-icon w-embed">
          <img
            src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/arrow-down.svg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
