const Config = {
  user: {
    first_name: "First",
    last_name: "Last"
  },
  name() {
    return `${Config.user.first_name} ${Config.user.last_name}`;
  },
  email: "user@gmail.com",
  github: "github.com/user",
  address: "123 Some Place",
  phone: "(xxx) xxx-xxxx",
  experience: [
    {
      position: "Painter",
      company: "Some Place",
      location: "Somewhere, SomeState",
      phone: "(xxx) xxx-xxxx",
      from: "Jul 83",
      to: "Present",
      details: [
        "Something something soemthing",
        "Let that brush dance around there and play",
        "Of course he's a happy little stone, cause we don't have any other kind",
        "We don't have anything but happy trees here"
      ]
    },
  ],
  skills: [
    {
      name: "Painting",
      details: [
        "lots of blues and greens",
        "other colors",
      ]
    },
  ],
  interests : [
    "painting",
    "JavaScript"
  ],
  bio : [
    "Painter who does stuff",
  ],
  education : [
    {
      level: "Bachelor’s of Science",
      date: "May 1986",
      details: [
        "Some Institution, City ST",
        "Major: Some Major",
        "Major GPA: x.xx",
        "Overall GPA: x.xx",
      ]
    },
    {
      level: "High School Diploma",
      date: "May 1934",
      details: [
        "Some School, City ST",
        "other things",
        "GPA: x.xx",
      ]
    },
  ],
};

export default Config;
