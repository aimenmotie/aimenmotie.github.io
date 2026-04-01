import { BiTestTube, BiWater, BiHighlight } from 'react-icons/bi';
import { GiMaterialsScience, GiChemicalDrop, GiSettingsKnobs, GiMicroscope, GiDna2 } from 'react-icons/gi';
import { SiPython, SiLatex, SiMicrosoftoffice, SiPytorch, SiTensorflow } from 'react-icons/si';
import { VscGraph } from 'react-icons/vsc';

export const SkillSet = [
    {
        id: "1",
        name: "Python",
        icon: <SiPython />,
        imgsrc: "images/python.png"
    },
    {
        id: "9",
        name: "AI & Machine Learning",
        icon: <SiPytorch />,
        imgsrc: "images/ai.png"
    },
    {
        id: "2",
        name: "LaTeX",
        icon: <SiLatex />,
        imgsrc: "images/latex.png"
    },
    {
        id: "3",
        name: "Hysys",
        icon: <GiSettingsKnobs />,
        imgsrc: "images/hysys.png"
    },
    {
        id: "4",
        name: "Origin Pro",
        icon: <VscGraph />,
        imgsrc: "images/originpro.png"
    },
    {
        id: "5",
        name: "COD Analysis",
        icon: <BiTestTube />,
        imgsrc: "images/cod.png"
    },
    {
        id: "6",
        name: "UV-Vis",
        icon: <GiMicroscope />,
        imgsrc: "images/uvvis.png"
    },
    {
        id: "7",
        name: "HPLC",
        icon: <GiDna2 />,
        imgsrc: "images/hplc.png"
    },
    {
        id: "8",
        name: "MS Office",
        icon: <SiMicrosoftoffice />,
        imgsrc: "images/office.png"
    }
]

export const ProjImg = [
    {
        id: "1",
        name: "PEEK Review",
        fullTitle: "Polyetheretherketone (PEEK): A Comprehensive Review of Advanced Polymer Engineering, Biomedical Applications, and Emerging Technological Frontiers",
        category: "publication",
        journal: "Gazi University Journal of Science (Part A)",
        year: "2026",
        abstract: "A top-level investigation into PEEK's superior mechanical properties and its revolutionary role in 3D-printed biomedical implants and radiation-shielded aerospace composites.",
        imgsrc: "projectImg/peek_scholarly_visual_v3.png",
        href: "https://doi.org/10.54287/gujsa.1870133"
    },
    {
        id: "2",
        name: "Uraniferous Effluents Treatment",
        fullTitle: "Treatment of Uraniferous Effluents by an Activated Carbon Produced from Nut Shells",
        category: "publication",
        journal: "Zenodo (Scientific Reports)",
        year: "2025",
        abstract: "Optimizing the removal of radioactive uranium from industrial effluents using high-efficiency activated carbon derived from agricultural waste (Pecan Nut Shells).",
        imgsrc: "projectImg/uranium_scholarly_visual_v3.png",
        href: "https://doi.org/10.5281/zenodo.17609540"
    }
]
export const Experience=[
    {
        id: "1",
        date: "2022 - 2023",
        name: "R&D and Process Control Specialist",
        company: "LIMA SERAMIK, Eskisehir, Turkey",
        desc: [
            "Coordinated and controlled production processes.",
            "Conducted R&D on advanced ceramic materials.",
            "Optimized process parameters for improved output quality."
        ]
    },
    {
        id: "2",
        date: "2022 - 2023",
        name: "Physicochemical Analyst",
        company: "El Kendi MS Pharma, Algeria",
        desc: [
            "Analytical testing of pharmaceutical products.",
            "Ensured compliance with international quality standards.",
            "Operated advanced lab equipment: UV-Vis, HPLC."
        ]
    },
    {
        id: "3",
        date: "2022",
        name: "Physicochemical Analyst",
        company: "National Agency for Pharmaceutical Products, Algeria",
        desc: [
            "Performed quality control on medical products.",
            "Analyzed chemical composition and stability."
        ]
    }
    
]
export const Education=[
    {
        id: 1,
        date: "2024 - Present",
        name: "PhD in Chemical Engineering",
        company: "Eskisehir Osmangazi University",
        desc: "Current GPA: 3.93/4.00 (Ranked 1st). Specializing in wastewater treatment and adsorption kinetics."
    },
    {
        id: 2,
        date: "2020 - 2022",
        name: "Master’s in Chemical Engineering",
        company: "USTHB, Algeria",
        desc: "GPA: 14/20 (Ranked 9th out of 100). Focus on Process Engineering."
    },
    {
        id: 3,
        date: "2017 - 2020",
        name: "Bachelor’s in Process Engineering",
        company: "USTHB, Algeria",
        desc: "Foundation in chemical processes and environmental engineering."
    },
    
]
export const Services=[
    {
        id: 1,
         icon: <BiTestTube />,
         name: "Wastewater Treatment",
         desc: "Advanced oxidation processes (AOPs) and adsorption techniques.",
    },
    {   id: 2,
        icon: <GiChemicalDrop/>,
        name: "Process Control",
        desc: "Expertise in R&D and industrial process optimization.",
    },
    {   id: 3,
        icon: <BiWater/>,
        name: "Environmental Research",
        desc: "Specialized in nuclear effluent treatment and material synthesis.",
    }
]