import { useState } from "react";
import { ButtonTextOnly } from "../../components/ButtonTextOnly";
import { Dropdown } from "../../components/Dropdown";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Input } from "../../components/Input";
import { IconsFacebook1 } from "../../icons/IconsFacebook1";
import { IconsInstagram1 } from "../../icons/IconsInstagram1";
import { IconsLinkedin } from "../../icons/IconsLinkedin";
import { IconsSearch1 } from "../../icons/IconsSearch1";
import { IconsTwitter1 } from "../../icons/IconsTwitter1";
import { Logo2 } from "../../icons/Logo2";
import "./style.css";

export const Index = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="index">
      <div className="landing-page">
        <div className="overlap-group">
          <img
            className="hero"
            alt="Hero"
            src="https://cdn.animaapp.com/projects/65c27ebcd6f62b54e755249e/releases/65c27f4137c6cf26594981b5/img/hero.png"
          />
          <HeaderDesktop className="header-desktop-instance" />
          <div className="content-CTA">
            <div className="div-2">
              <div className="title">
                <div className="hr-line-label">
                  <img
                    className="line"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65c27ebcd6f62b54e755249e/releases/65c27f4137c6cf26594981b5/img/line-1.svg"
                  />
                  <div className="label-2">We are offering the</div>
                </div>
                <div className="title-2">Best Real Estate Deals</div>
              </div>
              <p style={{ color: "#ffffff" }}>
                {" "}
                {/* Inline CSS for text color white */}
                {!expanded
                  ? "Welcome to our vibrant community! We're excited to have you join us on this journey."
                  : "Welcome to our vibrant community of dreamers and achievers. Explore endless possibilities as you embark on a journey of discovery through our curated collection of homes. Start envisioning your future with us today! Uncover the perfect sanctuary tailored to your desires, where every corner tells a story and every room resonates with possibility. From cozy cottages to luxurious penthouses, our diverse selection ensures there's something for every dreamer. Join us and let's turn your vision of home into reality, together."}
              </p>
            </div>
            <div className="CTA">
              <ButtonTextOnly
                className="button-text-only-instance"
                text={expanded ? "Less Details" : "More Details"}
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <div className="search">
            <div className="subtitle-icon">
              <div className="description-2">Find Your Home</div>
              <IconsSearch1 className="icons-search" color="#2F234F" />
            </div>
            <div className="search-fields">
              <input
                type="text"
                className="input-field"
                placeholder="Location"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Category"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Property Type"
              />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-properties">
        <div className="title-description">
          <div className="title-3">Featured Properties</div>
          <p className="p">
            "Where Dreams Find a Home. Discover Your Perfect Space. Welcome to
            Your New Beginning."
          </p>
        </div>
        <div className="img-container">
        <img
          className="imagw"
          alt="Imagw"
          src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          className="image"
          alt="Image"
          src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          className="img"
          alt="Image"
          src="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          className="image-2"
          alt="Image"
          src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          className="image-3"
          alt="Image"
          src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        </div>
      </div>
      <div className="our-feature">
        <div className="wrapper">
          <div className="cards-content">
            <div className="card">
              <div className="headline">Living Inside a Nature</div>
              <p className="headline-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in.
              </p>
            </div>
            <div className="card">
              <div className="headline-3">Royal Touch Paint</div>
              <p className="headline-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in.
              </p>
            </div>
            <div className="card">
              <div className="headline-3">Luxurious Fittings</div>
              <p className="headline-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in.
              </p>
            </div>
          </div>
          <img
            className="cover"
            alt="Cover"
            src="https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="title-4">Our Features</div>
      </div>
      <div className="recent-properties">
        <div className="title-description">
          <div className="title-3">Recent Properties</div>
          <p className="p">
            Explore our latest listings featuring a diverse range of properties,
            from cozy apartments to spacious family homes. Discover your dream
            property today with our updated website showcasing the newest
            additions to the market
          </p>
        </div>
        <div className="content-wrapper">
          <div className="row">
            <img
              className="image-4"
              alt="Image"
              src="https://media.designcafe.com/wp-content/uploads/2020/09/25163450/modern-living-room-designers-for-2bhk-home-design.jpg"
            />
            <div className="content-wrapper-2">
              <div className="content-2">
                <div className="div-2">
                  <div className="title-5">Interior Design</div>
                  <p className="description-3">
                    <span className="span">
                      Welcome to your coastal haven, where the soothing sounds
                      of the ocean and gentle sea breeze invite you to unwind.
                      This beachfront retreat offers panoramic views of the
                      sparkling waters and pristine sands, creating a backdrop
                      of unparalleled beauty. Step inside to find a harmonious
                      blend of coastal charm and modern luxury, with open-plan
                      living spaces and stylish finishes....{" "}
                    </span>
                    <span className="text-wrapper-2">Read more</span>
                  </p>
                </div>
                <p className="title-6">
                  <span className="text-wrapper-3">₹ 30,000/</span>
                  <span className="text-wrapper-4">month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content-wrapper-2">
              <div className="div-3">
                <div className="title-description-2">
                  <div className="title-7">Interior Design</div>
                  <p className="description-4">
                    <span className="span">
                      Discover your oasis of tranquility in this charming home
                      nestled amidst lush greenery. With its spacious interiors,
                      abundant natural light, and modern amenities, this house
                      offers the perfect blend of comfort and elegance. Embrace
                      the essence of home in this inviting sanctuary, where
                      every detail is thoughtfully designed to enhance your
                      everyday living experience. ...{" "}
                    </span>
                    <span className="text-wrapper-5">Read more</span>
                  </p>
                </div>
                <p className="title-6">
                  <span className="text-wrapper-3">₹ 26,000/</span>
                  <span className="text-wrapper-4">month</span>
                </p>
              </div>
            </div>
            <img
              className="image-5"
              alt="Image"
              src="https://cdn.animaapp.com/projects/65c27ebcd6f62b54e755249e/releases/65c27f4137c6cf26594981b5/img/image-7.png"
            />
          </div>
        </div>
        <ButtonTextOnly
          className="button-text-only-3"
          text="View more"
          textClassName="button-text-only-2"
        />
      </div>
      <div className="team">
        <div className="title-description-3">
          <div className="title-3">Meet Our Team</div>
          <p className="p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="content-3">
          <div className="element">
            <div className="team-member">
              <img
                className="avatar-mask"
                alt="Avatar mask"
                src="https://media.licdn.com/dms/image/D4D03AQGGIHEXG-B6Fw/profile-displayphoto-shrink_800_800/0/1702540798909?e=1712793600&v=beta&t=I4t4J-6Py-aqRwJ3ugz2oE2aEsC4GEAbsNBK5JGhpC0"
              />
              <div className="div-4">
                <div className="title-8">Aman Kumar Tiwari</div>
                <div className="sub-title">Junior Developer</div>
              </div>
            </div>
          </div>
          <div className="team-member-wrapper">
            <div className="div-5">
              <img
                className="avatar-mask-2"
                alt="Avatar mask"
                src="https://media.licdn.com/dms/image/D4D03AQH0ZTWg198i4g/profile-displayphoto-shrink_800_800/0/1677187522693?e=1712793600&v=beta&t=dBZ1N11goMMma4XMUZWeCWEZhz1pOLut-8QDHLOXXfc"
              />
              <div className="div-4">
                <div className="title-9">Lokesh Bansal</div>
                <div className="sub-title">Founder</div>
              </div>
              <div className="contact">
                <IconsFacebook1 className="icon-instance-node" />
                <IconsInstagram1 className="icon-instance-node" />
                <IconsLinkedin
                  className="icon-instance-node"
                  color="#2F234F"
                  url={"https://www.linkedin.com/in/lokeshbansal75/"}
                />
                <IconsTwitter1 className="icon-instance-node" />
              </div>
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img
                className="avatar-mask"
                alt="Avatar mask"
                src="https://media.licdn.com/dms/image/C5103AQEC_luNa681Gw/profile-displayphoto-shrink_800_800/0/1523291555193?e=1712793600&v=beta&t=40VmovhpFT62wmkhZRSbruQ9OHELx7OS_raHfgMB6-I"
              />
              <div className="div-4">
                <div className="title-9">Lovepreet Sharma</div>
                <div className="sub-title">Senior Developer</div>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img
                className="avatar-mask"
                alt="Avatar mask"
                src="https://media.licdn.com/dms/image/C4E03AQF7VUOtmKAkMA/profile-displayphoto-shrink_800_800/0/1641057392700?e=1712793600&v=beta&t=vlBUET5t1-xy6tx1nt3fIXCZjAwdLJLdsWhyH4uxbIE"
              />
              <div className="div-4">
                <div className="title-9">Sandeep Kumar</div>
                <div className="sub-title">Senior Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CTA-2">
        <div className="shapes">
          <div className="overlap-group-5">
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
        </div>
        <div className="subscribe-wrapper">
          <div className="div-3">
            <div className="title-11">Don’t Miss A Thing!</div>
            <p className="description">
              Subscribe with Email and loads of interesting news will be sent to
              you on a daily basis.
            </p>
          </div>
          <div className="input-2">
            <Input
              className="input-instance"
              text="Your email here"
              textClassName="text-wrapper-6"
            />
            <ButtonTextOnly className="button-text-only-4" text="Subscribe" />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="logo-description">
          <Logo2 className="logo-2" />
          <p className="description-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="content-4">
          <div className="text-wrapper-7">Recent Properties</div>
          <div className="recent-properties-2">
            <div className="recent-property">
              <img
                className="cover-2"
                alt="Cover"
                src="https://newprojects.99acres.com/projects/srg_developers_and_promoters/srg_marbella_grand/images/gzxfywuw.jpg"
              />
              <div className="address-cost">
                <p className="text-wrapper-8">
                  Flat/Apartment for Sale in SRG Marbella Grand, Sector 82
                  Mohali, Mohali, Punjab
                </p>
                <div className="text-wrapper-9">₹ 20,000</div>
              </div>
            </div>
            <div className="recent-property">
              <img
                className="cover-2"
                alt="Cover"
                src="https://newprojects.99acres.com/projects/sbp_group_and_credo_assets/city_of_dreams/images/mg04wwju_optOrig.jpg"
              />
              <div className="address-cost">
                <p className="text-wrapper-8">
                  SBP City of Dreams
                  <br />
                  Sector 127 , mohali
                </p>
                <div className="text-wrapper-9">₹ 28,000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-5">
          <div className="text-wrapper-7">Contact Info</div>
          <div className="div-2">
            <p className="text-wrapper-8">
              F-335 (P), Industrial Area, Phase 8B, Sector 74, Mohali (SAS
              Nagar), Punjab - 160055, India
            </p>
            <div className="div-3">
              <p className="phone">
                <span className="text-wrapper-6">Phone:</span>
                <span className="text-wrapper-10"> (239) 555-0108</span>
              </p>
              <p className="div-6">
                <span className="text-wrapper-6">Email:</span>
                <span className="text-wrapper-10"> abcd@75way.com</span>
              </p>
              <p className="div-6">
                <span className="text-wrapper-6">Website:</span>
                <span className="text-wrapper-10"> 75way.com </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
