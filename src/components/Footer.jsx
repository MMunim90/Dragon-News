import React from "react";

const Footer = () => {
  return (
      <div className="w-11/12 mx-auto">
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by <strong>The Dragon News</strong>
            </p>
          </aside>
        </footer>
      </div>
  );
};

export default Footer;
