import { Injectable } from "@angular/core";
import { AgendaItem } from "../types";

@Injectable({
  providedIn: "root",
})
export class AgendaService {
  private agenda: AgendaItem[] = [
    {
      id: 1,
      title:
        "Day 1: Arrival and registration of delegates and invited guests",
      speakerIds: [],
      startTime: "10/09/2023 07:00 AM",
      endTime: "08:15 AM",
      description: "",
    },
    {
      id: 2,
      title: "All delegates and invited guests seated",
      speakerIds: [],
      startTime: "10/09/2023 08:15 AM",
      endTime: "08:20 AM",
      description: "",
    },
    {
      id: 3,
      title: "Arrival of Hon Laura McLeod-Katjirua, Governor of Khomas Region",
      speakerIds: [],
      startTime: "10/09/2023 08:20 AM",
      endTime: "08:25 AM",
      description: "",
    },
    {
      id: 4,
      title:
        "Arrival of Hon. Dr. Peya Mushelenga, Minister of ICT",
      speakerIds: [],
      startTime: "10/09/2023  08:25 AM",
      endTime: "08:30 AM",
      description: "",
    },
    {
      id: 5,
      title:
        "Singing of the National and AU Anthems",
      speakerIds: [],
      startTime: "10/09/2023  08:30 AM",
      endTime: "08:35 AM",
      description: "",
    },
    {
      id: 6,
      title:
        "Welcoming remarks: Hon Laura McLeod- Katjirua, Governor of Khomas Region",
      speakerIds: [],
      startTime: "10/09/2023  08:35 AM",
      endTime: "08:45 AM",
      description: "",
    },
    {
      id: 7,
      title:
        "Performance: The Elli’s",
      speakerIds: [],
      startTime: "10/09/2023  2023 08:45 AM",
      endTime: "08:50 AM",
      description: "",
    },
    {
      id: 8,
      title: "Introduction of keynote speaker: Hon. Emma Theofelus: Deputy Minister, MICT",
      speakerIds: [],
      startTime: "10/09/2023  09:50 AM",
      endTime: "09:00 AM",
      description: "",
    },
    {
      id: 9,
      title:
        "Keynote address: Dr. Peya Mushelenga, Minister of MICT",
      speakerIds: [],
      startTime: "10/09/2023  09:00 AM",
      endTime: "09:20 AM",
      description: "",
    },
    {
      id: 10,
      title: "Vote of thanks: Dr Audrin Mathe, Executive Director – MICT",
      speakerIds: [],
      startTime: "10/09/2023  09:20 AM",
      endTime: "09:30 AM",
      description: "",
    },
    {
      id: 11,
      title: "Group Photo",
      speakerIds: [],
      startTime: "10/09/2023  09:30 AM",
      endTime: "09:40 AM",
      description: "",
    },
    {
      id: 12,
      title: "Ribbon cutting and touring of exhibition stalls: Dr. Peya Mushelenga, Hon Laura McLeod- Katjirua and all dignitaries",
      speakerIds: [],
      startTime: "10/09/2023  09:30 AM",
      endTime: "10:30 AM",
      description: "",
    },
    {
      id: 13,
      title:
        "Africa’s next biggest Lithium & Tin mine– the case of Uis tin mine",
      speakerIds: [],
      startTime: "10/09/2023  8:30 AM",
      endTime: "09:10 AM",
      description: "",
    },
    {
      id: 14,
      title:
        "Re-developing the Okanjande mine: Building a leading Graphite and Processing Company ",
      speakerIds: [],
      startTime: "31/08/2023 9:10 AM",
      endTime: "09:50 AM",
      description: "",
    },
    {
      id: 15,
      title:
        "Rare Earths Alliance Namibia: Strategic Partnerships for Namibia to become the next major rare earths producer",
      speakerIds: [],
      startTime: "10/09/2023  9:50 AM",
      endTime: "10:30 AM",
      description: "",
    },
    {
      id: 16,
      title: "Presentation: Mr. Elton Witbooi: Executive: Cyber Security & ICT: CRAN Topic: Cybercrime statistics and National Computer Incidence Response Team (NamCIRST) readiness",
      speakerIds: [],
      startTime: "10/09/2023  10:30 AM",
      endTime: "11:00 AM",
      description: "",
    },
    {
      id: 17,
      title: "Panel discussion: Topic: Universal access to internet connectivity as a basic need.      Moderator: Dr. Elizabeth U. Kamutuezu: Deputy Director Panelist: Mrs Emilia Nghikembua; CEO: CRAN Prof Heike Winschiers -Theophilus: Professor, Department: Software Engineering Dr. Becky Ndjoze-Ojo, a member of parliament and a member of Parliamentary Standing Committee on ICT and Innovation",
      speakerIds: [],
      startTime: "10/09/2023  11:00 AM",
      endTime: "12:00 PM",
      description: "",
    },
    {
      id: 18,
      title:
        "Presentation: Ms. Habani Munyungano: Deputy Chief National Development Advisor Office of the President , National Planning Commission Topic: Sixth National Development Plan (NDP6)",
      speakerIds: [],
      startTime: "10/09/2023  12:00 PM",
      endTime: "12:50 PM",
      description: "",
    },
    {
      id: 19,
      title: "Lunch Break",
      speakerIds: [],
      startTime: "10/09/2023  12:55 PM",
      endTime: "14:00 PM",
      description: "",
    },
    {
      id: 20,
      title:
        "Presentation: Ms Monica Nehemia, Chief Technical and Information Officer - MTC Topic: 5G and Cybersecurity: Preparing a secure evolution to 5G.",
      speakerIds: [],
      startTime: "10/09/2023  14:00 PM",
      endTime: "14:30 PM",
      description: "",
    },
    {
      id: 21,
      title:
        "Breakaway: Klaus von Kries AVM - Berlin Germany Topic: Managed wifi in a connected world",
      speakerIds: [],
      startTime: "10/09/2023  14:30 PM",
      endTime: "15:10 PM",
      description: "",
    },
    {
      id: 22,
      title: "Breakaway: Leo Maruwasa, Lead for Data & Digital Transformation, Telecom Namibia Topic: Zero in on Top Security blind spots to better secure your organization & Direct Your Cybersecurity Investments",
      speakerIds: [],
      startTime: "10/09/2023  14:30 PM",
      endTime: "15:10 PM",
      description: "",
    },
    {
      id: 23,
      title: "Breakaway: Schoemans",
      speakerIds: [],
      startTime: "10/09/2023  14:30 PM",
      endTime: "15:10 PM",
      description: "",
    },
    {
      id: 24,
      title: "Breakaway: New Era Publication Corporation",
      speakerIds: [],
      startTime: "10/09/2023  14:30 PM",
      endTime: "15:10 PM",
      description: "",
    },
    {
      id: 24,
      title: "Presentation: Mrs Nashilongo Gervasius-Nakale Topic: Namibia National Assessment on Internet Universality Indicators ROAM-X Assessment",
      speakerIds: [],
      startTime: "10/09/2023  15:10 PM",
      endTime: "15:40 PM",
      description: "",
    },
    {
      id: 25,
      title: "Presentation: Ms. Claudia Nikanor Head: Business Support Unit ICT - NAMPOST Topic: The role of cybersecurity in fostering e-commerce",
      speakerIds: [],
      startTime: "10/09/2023  15:40 PM",
      endTime: "16:20 PM",
      description: "",
    },
    {
      id: 26,
      title: "Presentation: Mr. Marsorry Ickua, Director Information Communication Technology: Bank of Namibia Topic: Cybersecurity in the Banking Sector; Importance, threats, trends and Challenges",
      speakerIds: [],
      startTime: "10/09/2023  16:20 PM",
      endTime: "16:40 PM",
      description: "",
    },
  ];

  constructor() {}

  getAgenda(): AgendaItem[] {
    return this.agenda;
  }

  getAgendaItem(id: number): AgendaItem | undefined {
    return this.agenda.find((agenda) => agenda.id === id);
  }

  public formatTalkTime(agendaItem: AgendaItem) {
    return `${this.convertToTwelveHourFormat(
      agendaItem.startTime
    )} - ${this.convertToTwelveHourFormat(agendaItem.endTime)}`;
  }

  // Talk times are stored in military time to make it easier to work with
  // local notifications. Convert to 12 hour clock format.
  // Likely better ways to do this with Date object.

  // time: 08:00 AM, 12:30 PM, 14:00 PM etc.
  private convertToTwelveHourFormat(time: string) {
    let hour = parseInt(time.substring(0, 2));

    if (hour > 12) {
      hour = hour - 12;
    }

    return hour + time.slice(2);
  }
}
