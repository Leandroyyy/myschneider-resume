import MySchneiderLogo from "../../../../assets/my-schneider-logo.svg";

export function Footer() {
  return (
    <div className="flex flex-col w-screen mt-10 items-center gap-5">
      <img src={MySchneiderLogo} alt="my schneider logo" className="w-20" />
      <hr className="w-11/12 h-[0.2rem] bg-gray-50" />
      <p className="text-gray-500">© 2023 MySchneider | All Rights Reserved</p>
    </div>
  );
}
