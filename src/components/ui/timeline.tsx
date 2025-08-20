import { ArcTimeline, ArcTimelineItem } from "@/components/magicui/arc-timeline";


export function Timeline() {
  return (
    <ArcTimeline
      // className={cn(
      //   "[--step-line-active-color:#888888] dark:[--step-line-active-color:#9780ff]",
      //   "[--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]",
      //   "[--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]",
      //   "[--icon-active-color:#555555] dark:[--icon-active-color:#d4d4d4]",
      //   "[--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]",
      //   "[--time-active-color:#555555] dark:[--time-active-color:#d4d4d4]",
      //   "[--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]",
      //   "[--description-color:#555555] dark:[--description-color:#d4d4d4]"
      // )}
      data={TIMELINE}
      defaultActiveStep={{ time: "1980", stepIndex: 0 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "1980",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content:
          "Özver mekatronik kuruldu.",
        image: "/history/old1.jpg"
      },
    ],
  },
  {
    time: "1994",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content: "Mekanik ve endüstriyel hizmetlerimize başladık.",
        image: "/history/old2.jpg"
      },
    ],
  },
  {
    time: "2002",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content:
          "Makinalarımızı üretmeye başladık.",
        image: "/history/old3.jpg"
      },
    ],
  },
  {
    time: "2005",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content:
          "Yıllık 100.000 parça üretmeye başladık.",
        image: "/history/old6.jpg"
      },
    ],
  },
  {
    time: "2010",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content: "Kumaş ve iplik boyama makinelerini üretmeye başladık.",
        image: "/history/old5.jpg"
      },
    ],
  },
  {
    time: "2017",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content:
          "Yatırım yapılarımızı başlattık.",
        image: "/history/old6.jpg"
      },
    ],
  },
  {
    time: "2020",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content:
          "25 ülkeye yüksek donanımlı ürünlerimizi hizmete sunuyoruz.",
        image: "/history/new1.webp"
      },
    ],
  },
  {
    time: "2025",
    steps: [
      {
        icon: <svg width="16px" height="16px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path style={{ stroke: "#111", strokeWidth: 4, fill: "#ddd" }} d="M 5,5 90,30 65,50 95,80 80,95 50,65 30,90 z"/>
        </svg>,
        content: "Alanında uzman personelimiz ile 90+ firmaya hizmet veriyoruz.",
        image: "/history/new2.jpg"
      },
    ],
  },
];
