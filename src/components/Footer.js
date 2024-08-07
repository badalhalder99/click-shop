
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-white text-center font-medium xsmall:text-[14px] 2xsmall:text-[13px]">
          Copyright © {currentYear} All rights reserved by clickSHOP.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
