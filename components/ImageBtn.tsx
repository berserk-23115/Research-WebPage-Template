"use client";
import { FaGithub } from "react-icons/fa";
import { SiArxiv } from "react-icons/si";
import { Button } from "./ui/button";
import { BsFileEarmarkPdf } from "react-icons/bs";
export function GithubBtn() {
  return (
    <>
      <Button className={"bg-primary rounded-2xl"}>
        <FaGithub size={100}/>
        <span className={"ml-2 font-bold font-sans"}>Code</span>
      </Button>
    </>
  );
}
export function ArxivBtn() {
  return (
    <>
      <Button className={"bg-primary rounded-2xl"}>
        <SiArxiv />
        <span className={"ml-2 font-bold font-sans"}>arXiv</span>
      </Button>
    </>
  );
}
export function PDFBtn() {
  return (
    <>
      <Button className={"bg-primary rounded-2xl"}>
        <BsFileEarmarkPdf />
        <span className={"ml-2 font-bold font-sans"}>Paper</span>
      </Button>
    </>
  );
}
