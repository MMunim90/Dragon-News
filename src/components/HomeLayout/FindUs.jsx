import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 join-item justify-start"><FaFacebook /><Link to='https://www.facebook.com/share/19gE19gM8h/?mibextid=wwXIfr'>Facebook</Link></button>
          <button className="btn bg-base-100 join-item justify-start"><FaTwitter /><Link to="https://x.com/__munim__">Twitter</Link></button>
          <button className="btn bg-base-100 join-item justify-start"><FaInstagram /><Link to="https://www.instagram.com/_mmunim_">Instagram</Link></button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
