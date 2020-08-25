import {createElement as e} from "react";

import {
  Document,
  Font,
  PDFViewer,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import roboto       from "../fonts/roboto/Roboto-Regular.ttf";
import mono         from "../fonts/roboto/RobotoMono-Regular.ttf";
import robotoBold   from "../fonts/roboto/Roboto-Bold.ttf";
import robotoThin   from "../fonts/roboto/Roboto-Thin.ttf";
import robotoItalic from "../fonts/roboto/Roboto-Italic.ttf";

[
  ["Roboto", roboto],
  ["Roboto Mono", mono],
  ["Roboto Bold", robotoBold],
  ["Roboto Thin", robotoThin],
  ["Roboto Italic", robotoItalic],
].forEach(([name, font]) => Font.register({family: name, src: font}));

import "./resume.css";
import {hr} from "./react-pdf-utils/line";

// import Config from "Config/site";
import Config from "Config/site.example";

const styles = {
  page: {
    margin: "10pt",
    padding: "10pt",
  },
  body: {
    paddingTop: "24pt",
    flex: 1,
    flexDirection: "row",
  },
  section_header: {
    fontSize: "16pt",
    paddingBottom: "6pt",
    fontFamily: "Roboto",
    width: "316pt"
  },
  section_text: {
    fontFamily: "Roboto",
    fontSize: "12pt",
  },
  education: {
  },
  left_column: {
    flexDirection: "column",
    width: "40%",
  },
  right_column: {
    width: "60%",
  },
  bullet: {
    paddingLeft: "12pt",
    paddingBottom: "2pt",
    paddingTop: "2pt",
    width: "90%" // keep text from going past the header hr
  },
  section: {
    left_column: {
      fontSize: "12pt",
      flexDirection: "column",
      flexGrow: 9,
    },
    right_column: {
      fontSize: "12pt",
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "flex-end",
      justifySelf: "flex-end"
    },
    header: {
      flexDirection: "row",
    },
    entry: {
      paddingTop: "4pt",
      paddingBottom: "4pt",
    }
  },
  bio: {
    fontSize: "12pt",
    paddingBottom: "10pt",
    width: "90%"
  },
  header: {
    container: {
      borderBottomWidth: 2,
      borderBottomColor: "#112131",
      borderBottomStyle: "solid",
      fontFamily: "Roboto",
      flexDirection: "row",
      paddingTop: "10pt",
    },
    top: {
      fontSize: "24pt",
      flexDirection: "column",
      fontFamily: "Roboto",
    },
    bottom: {
      flexDirection: "column",
      fontSize: "12pt",
      paddingLeft: "24pt",
      paddingBottom: "4pt",
    }
  }
};

import List, {Item} from "./react-pdf-utils/list";

const headerName = (name) => e(Text, {style: styles.header.top}, name);
const headerItem = (item) => e(Text, {style: styles.header.bottom}, item);

const ResumeHeader = () => (
  e(View, {style: styles.header.container},
    headerName(Config.name()),
    e(View, null,
      headerItem(Config.email),
      headerItem(Config.github),
    ),
    e(View, null,
      headerItem(Config.address),
      headerItem(Config.phone)
    )
  )
);

const ExperienceEntry = ({position, company, location, phone, from, to, details}) => (
  e(View, {style: styles.section.entry},
    e(View, {style: styles.section.header},
      e(Text, {style: styles.section.left_column}, company),
      e(Text, {style: styles.section.right_column}, phone),
    ),
    e(View, {style: styles.section.header},
      e(Text, {style: styles.section.left_column}, location),
    ),
    e(View, {style: [styles.section.header, {paddingTop: "4pt", paddingBottom: "4pt"}]},
      e(Text, {style: styles.section.left_column}, position),
      e(Text, {style: styles.section.right_column}, `${from} - ${to}`),
    ),
    e(View, {style: styles.bullet},
      e(List, null, details.map(d => e(Item, null, d)))
    )
  )
);

const EducationEntry = ({level, date, details}) => (
  e(View, {style: styles.section.entry},
    e(View, {style: styles.section.header},
      e(Text, {style: styles.section.left_column}, level),
      e(Text, {style: styles.section.right_column}, date),
    ),
    e(View, {style: styles.bullet},
      e(List, null, details.map(d => e(Item, null, d)))
    )
  )
);

const SkillsEntry = ({name, details}) => (
  e(View, {style: [styles.section.entry, {paddingBottom: "0pt"}]},
    e(View, {style: [styles.section.header, {paddingRight: "18pt"}]},
      e(Text, {style: styles.section.left_column}, name),
    ),
    e(View, {style: styles.bullet},
      e(List, null, details.map(d => e(Item, null, d)))
    )
  )
);

const Skills = () => (
  e(View, {style: styles.experience},
    e(View, {style: styles.section},
      e(Text, {style: styles.section_header}, "Skills"),
      hr(200),
      Config.skills.map(s => SkillsEntry(s))
    )
  )
);

const Experience = () => (
  e(View, {style: styles.experience},
    e(View, {style: styles.section},
      e(Text, {style: styles.section_header}, "Experience"),
      hr(316),
      Config.experience.map(e => ExperienceEntry(e))
    )
  )
);

const Interests = () => (
  e(View, {style: styles.interests},
    e(View, {style: styles.section},
      e(Text, {style: styles.section_header}, "Interests"),
      hr(200),
      e(List, null, Config.interests.map(i => e(Item, null, i)))
    )
  )
);

const Education = () => (
  e(View, {style: styles.education},
    e(View, {style: styles.section},
      e(Text, {style: styles.section_header}, "Education"),
      hr(316),
      Config.education.map(e => EducationEntry(e))
    )
  )
);

const Bio = () => (
  e(View, null,
    Config.bio.map(line => e(Text, {style: styles.bio}, line))
  )
);

const LeftColumn = () => (
  e(View, {style: styles.left_column},
    Bio(),
    Skills(),
    Interests()
  )
);

const RightColumn = () => (
  e(View, {style: styles.right_column},
    Experience(),
    Education(),
  )
);

const ResumeBody = () => (
  e(View, {style: styles.body},
    LeftColumn(),
    RightColumn()
  )
);

const PageOne = () => (
  // e(Page, {size: "A4", debug: true, ruler: true},
  e(Page, {size: "A4"},
    e(View, {style: styles.page},
      ResumeHeader(),
      ResumeBody(),
    ),
  )
);

const ResumeContent = () => (
  e(Document, {
    title: `${Config.name()}'s Resume`,
    author: `${Config.name()}`,
    subject: "Resume",
    keywords: "resume",
  }, PageOne())
);

// TODO: add PDFDownloadLink
const Resume = () => e(PDFViewer, {id: "resume"}, e(ResumeContent));

export default Resume;
