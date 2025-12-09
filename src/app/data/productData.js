// All products must have imageUrl, so add it to all missing in the raw array below
const rawData = [
  {
    key: "hospital",
    label: "Hospital",
    subs: [
      {
        name: "Patient Monitoring Systems",
        products: [
          {
            id: 1,
            name: "ECG Monitor",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292332/standardviewof8inchpatientmonitor_1200x1200_pvtrj5.jpg",
          },
          {
            id: 2,
            name: "Blood Pressure Monitor",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292585/6138LurvciL._AC_UF1000_1000_QL80__t8u1lp.jpg",
          },
          {
            id: 3,
            name: "Pulse Oximeter",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292662/4639-OXY_20500_20BT_t3klml.png",
          },
        ],
      },
      {
        name: "Surgical Instruments",
        products: [
          {
            id: 11,
            name: "Scalpels",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292719/626766_w_lpe9t0.jpg",
          },
          {
            id: 12,
            name: "Forceps",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292770/60211_dnpfmh.webp",
          },
          {
            id: 13,
            name: "Retractors",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292835/CK71000_01_40_45_50_55_60-cloward-retractor-sharp_zrdkfy.webp",
          },
          {
            id: 14,
            name: "Surgical Scissors",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765293320/35ca20c8e03b36ccc2f99b0a0e5e906d_e1uytg.jpg",
          },
        ],
      },
      {
        name: "Diagnostic Equipment",
        products: [
          {
            id: 15,
            name: "Ultrasound machines",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765293416/Screen-Shot-2018-05-07-at-3.19.07-PM_y3ynme.png",
          },
          {
            id: 16,
            name: "X-ray systems",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765293524/img_product_xray_002_ztwdxg.jpg",
          },
          {
            id: 17,
            name: "MRI scanners",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765298684/siemens-healthineers_MR_MAGNETOM-Viato.Mobile_teaser_m3fdc5.jpg",
          },
        ],
      },
      {
        name: "Patient Care Supplies",
        products: [
          {
            id: 18,
            name: "Hospital beds",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765298750/61fn11a09ZL_olde5l.jpg",
          },
          {
            id: 19,
            name: "Wheelchairs",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765298783/Invacare_9000_XT_Ultra-Lightweight_Manual_Wheelchair_9__23308.1710253406_pwyvbh.jpg",
          },
          {
            id: 20,
            name: "IV stands",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765298822/J0266_cus2ty.jpg",
          },
          {
            id: 21,
            name: "Bedside tables",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765298864/Bedside-Cabinet-Hero_Product_Node_Hero_Image_eulllq.jpg",
          },
        ],
      },
      {
        name: "Infection Control Products",
        products: [
          {
            id: 22,
            name: "Hand sanitizers",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765298907/4316_source_1724300018_fnee9b.jpg",
          },
          {
            id: 23,
            name: "Disinfectants",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765298971/iStock-917563406-thumb_at03nl.jpg",
          },
          {
            id: 24,
            name: "Sterilization equipment",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299040/EO_Sterilization_Equipment_CSSD_Medical_Ethylene_Oxide_Disinfecting_Sterilizer_4_wqfvwj.jpg",
          },
          {
            id: 25,
            name: "Personal Protective Equipment (PPE)",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299109/pk-1200_web_clphgk.webp",
          },
        ],
      },
      {
        name: "Wound Care Products",
        products: [
          {
            id: 26,
            name: "Bandages",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299161/Medline_PRM08800_Cohesive_Bandages_Tan_Non-sterile_Latex_wraps_1__70776.1708469218_feyxhu.jpg",
          },
          {
            id: 27,
            name: "Gauze",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299193/wipes-pads-rounds-6383776432185_w3anga.jpg",
          },
          {
            id: 28,
            name: "Dressings",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299248/61tHTluUhKL._AC_UL600_SR600_600__iosfnt.jpg",
          },
          {
            id: 29,
            name: "Wound closure strips",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299326/APWCB10_01_1000px_75c54a1d7ffcc9db083378dfe0f257da_lbx37s.png",
          },
        ],
      },
      {
        name: "IV Supplies",
        products: [
          {
            id: 30,
            name: "IV catheters",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299389/ClearSafe_cv9adb.jpg",
          },
          {
            id: 31,
            name: "Infusion sets",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299482/minimed-quick-set_poduxg.png",
          },
          {
            id: 32,
            name: "IV bags",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299543/poche-sterile-paysage_urvujh.jpg",
          },
          {
            id: 33,
            name: "Extension sets",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299606/image-20230828-105114_asxkdp.png",
          },
        ],
      },
      {
        name: "Syringes And Needles",
        products: [
          {
            id: 34,
            name: "Hypodermic needles",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299679/Hypodermic-needle_eeuqas.jpg",
          },
          { id: 35, name: "Insulin syringes", imageUrl: "" },
          { id: 36, name: "Safety needles", imageUrl: "" },
          { id: 37, name: "Latex gloves", imageUrl: "" },
          { id: 38, name: "Nitrile gloves", imageUrl: "" },
          { id: 39, name: "Vinyl gloves", imageUrl: "" },
          { id: 40, name: "Sterile gloves", imageUrl: "" },
        ],
      },
      {
        name: "Patient Care Items",
        products: [
          { id: 41, name: "Incontinence products", imageUrl: "" },
          { id: 42, name: "Patient gowns", imageUrl: "" },
          { id: 43, name: "Disposable bed sheets", imageUrl: "" },
        ],
      },
      {
        name: "Cardiology",
        products: [
          { id: 44, name: "ECG machines", imageUrl: "" },
          { id: 45, name: "Cardiac monitors", imageUrl: "" },
          { id: 46, name: "Defibrillators", imageUrl: "" },
          { id: 47, name: "Stents", imageUrl: "" },
          { id: 48, name: "Catheters", imageUrl: "" },
        ],
      },
      {
        name: "Neurology",
        products: [
          { id: 49, name: "EEG machines", imageUrl: "" },
          { id: 50, name: "Nerve stimulators", imageUrl: "" },
          { id: 51, name: "Neurological examination kits", imageUrl: "" },
        ],
      },
      {
        name: "Orthopedics",
        products: [
          { id: 52, name: "Orthopedic implants", imageUrl: "" },
          { id: 53, name: "Braces", imageUrl: "" },
          { id: 54, name: "Splints", imageUrl: "" },
          { id: 55, name: "Casting materials", imageUrl: "" },
        ],
      },
      {
        name: "Gynecology and Obstetrics",
        products: [
          {
            id: 56,
            name: "Ultrasound machines",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765293416/Screen-Shot-2018-05-07-at-3.19.07-PM_y3ynme.png",
          },
          { id: 57, name: "Fetal monitors", imageUrl: "" },
          { id: 58, name: "Speculums", imageUrl: "" },
          { id: 59, name: "Delivery kits", imageUrl: "" },
        ],
      },
      {
        name: "Pediatrics",
        products: [
          { id: 60, name: "Pediatric stethoscopes", imageUrl: "" },
          { id: 61, name: "Neonatal incubators", imageUrl: "" },
          { id: 62, name: "Infant warmers", imageUrl: "" },
        ],
      },
      {
        name: "Oncology",
        products: [
          { id: 63, name: "Chemotherapy chairs", imageUrl: "" },
          { id: 64, name: "Infusion pumps", imageUrl: "" },
          { id: 65, name: "Radiation therapy equipment", imageUrl: "" },
        ],
      },
      {
        name: "Urology",
        products: [
          { id: 66, name: "Catheters", imageUrl: "" },
          { id: 67, name: "Cystoscopes", imageUrl: "" },
          { id: 68, name: "Urodynamic systems", imageUrl: "" },
        ],
      },
      {
        name: "Gastroenterology",
        products: [
          { id: 69, name: "Endoscopes", imageUrl: "" },
          { id: 70, name: "Colonoscopes", imageUrl: "" },
          { id: 71, name: "Biopsy forceps", imageUrl: "" },
        ],
      },
      {
        name: "Ophthalmology",
        products: [
          { id: 72, name: "Ophthalmoscopes", imageUrl: "" },
          { id: 73, name: "Slit lamps", imageUrl: "" },
          { id: 74, name: "Surgical microscopes", imageUrl: "" },
        ],
      },
      {
        name: "Dermatology",
        products: [
          { id: 75, name: "Dermatoscopes", imageUrl: "" },
          { id: 76, name: "Laser therapy devices", imageUrl: "" },
          { id: 77, name: "Cryotherapy units", imageUrl: "" },
          { id: 78, name: "PRP", imageUrl: "" },
        ],
      },
      {
        name: "Agglutination Test Kits",
        products: [
          { id: 79, name: "Blood Typing Reagents", imageUrl: "" },
          { id: 80, name: "Bacterial Identification Tests", imageUrl: "" },
          { id: 81, name: "Diagnostic Agglutination Tests", imageUrl: "" },
        ],
      },
      {
        name: "Analytical Instruments",
        products: [
          { id: 82, name: "UV-Vis Spectrophotometers", imageUrl: "" },
          { id: 83, name: "Fluorescence Spectrophotometers", imageUrl: "" },
          { id: 84, name: "Gas Chromatographs (GC)", imageUrl: "" },
          { id: 85, name: "Liquid Chromatographs (HPLC)", imageUrl: "" },
          { id: 86, name: "Quadrupole Mass Spectrometers", imageUrl: "" },
          {
            id: 87,
            name: "Time-of-Flight (TOF) Mass Spectrometers",
            imageUrl: "",
          },
          {
            id: 88,
            name: "Atomic Absorption Spectrometers (AAS)",
            imageUrl: "",
          },
          { id: 89, name: "Potentiostats/Galvanostats", imageUrl: "" },
          { id: 90, name: "pH Meters", imageUrl: "" },
          { id: 91, name: "Electron Microscopes (EM)", imageUrl: "" },
          {
            id: 92,
            name: "Differential Scanning Calorimeters (DSC)",
            imageUrl: "",
          },
          { id: 93, name: "Thermogravimetric Analyzers (TGA)", imageUrl: "" },
          { id: 94, name: "Conductivity Meters", imageUrl: "" },
          { id: 95, name: "Refractometers", imageUrl: "" },
          {
            id: 96,
            name: "Optical Emission Spectrometers (OES)",
            imageUrl: "",
          },
          { id: 97, name: "Particle Size Analyzers", imageUrl: "" },
          { id: 98, name: "Gel Electrophoresis Equipment", imageUrl: "" },
        ],
      },
      {
        name: "Microbiology",
        products: [
          { id: 99, name: "Agar Plates", imageUrl: "" },
          { id: 100, name: "Broth Media", imageUrl: "" },
          { id: 101, name: "Specialized Media", imageUrl: "" },
          { id: 102, name: "Stains and Dyes", imageUrl: "" },
          { id: 103, name: "Biochemical Reagents", imageUrl: "" },
          { id: 104, name: "Swabs", imageUrl: "" },
          { id: 105, name: "Inoculation Loops", imageUrl: "" },
          { id: 106, name: "Pathogen Detection Kits", imageUrl: "" },
          { id: 107, name: "Antibiotic Sensitivity Test Kits", imageUrl: "" },
          { id: 108, name: "Control Strains", imageUrl: "" },
          { id: 109, name: "Calibration Standards", imageUrl: "" },
        ],
      },
      {
        name: "IVF Products",
        products: [
          { id: 123, name: "IVF culture media", imageUrl: "" },
          { id: 124, name: "Embryo transfer catheters", imageUrl: "" },
          { id: 125, name: "IVF incubators", imageUrl: "" },
          { id: 126, name: "IVF consumables", imageUrl: "" },
        ],
      },
      {
        name: "Histopathology",
        products: [
          { id: 110, name: "Formalin", imageUrl: "" },
          { id: 111, name: "Bouin's Solution", imageUrl: "" },
          { id: 112, name: "Alcohols", imageUrl: "" },
          { id: 113, name: "Paraffin Wax", imageUrl: "" },
          { id: 114, name: "Resin Media", imageUrl: "" },
          { id: 115, name: "Hematoxylin and Eosin (H&E)", imageUrl: "" },
          { id: 116, name: "Special Stains", imageUrl: "" },
          { id: 117, name: "Slides and Coverslips", imageUrl: "" },
          { id: 118, name: "Staining Racks", imageUrl: "" },
          { id: 119, name: "Disposable Microtome Blades", imageUrl: "" },
          { id: 120, name: "Microtome Parts", imageUrl: "" },
          { id: 121, name: "Control Slides", imageUrl: "" },
          { id: 122, name: "Calibration Standards", imageUrl: "" },
        ],
      },
    ],
  },
  {
    key: "laboratory",
    label: "Laborotory",
    subs: [
      {
        name: "Core Lab Equipment",
        products: [
          {
            id: 127,
            name: "Optical microscopes",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299761/csm_leica-dm750_986039662b_exi8ci.jpg",
          },
          {
            id: 128,
            name: "Compound microscopes",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765299946/edupro-trinocular-microscope-EDU550T-hero_gjmy8m.jpg",
          },
          {
            id: 129,
            name: "Digital microscopes",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300008/new_done_2_5e1a3355-6eb6-4c67-82e1-8c3916307971_xgrlne.jpg",
          },
          {
            id: 130,
            name: "Centrifuges",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300061/226R_20open_0_wtbdoi.png",
          },
          {
            id: 131,
            name: "Balances",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300100/ANALYTICAL_20BALANCE_20DUST_20AND_20WATER_20RESISTANT_ssb8bk.jpg",
          },
          {
            id: 132,
            name: "Spectrophotometers",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300134/uv-2600i-plus-uv-2700i-plus-main_s49hxx.jpg",
          },
          {
            id: 133,
            name: "pH Meters",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300169/pH-Meter-BMET-201--2.00-to-14.00-pH-0.01-pH-m1-Biolab_guz3du.jpg",
          },
          {
            id: 134,
            name: "Hot Plates and Magnetic Stirrers",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300349/1a94fb9d-f916-498f-8bad-cad3cd36fc22_odyraa.webp",
          },
          {
            id: 135,
            name: "Incubators",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300295/nu-5700-right-closed_zwpn1u.jpg",
          },
          {
            id: 136,
            name: "Autoclaves",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300419/JP-Selecta-desktop-autoclave-series-960x720_wlu6t0.jpg",
          },
          {
            id: 137,
            name: "Water Baths",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300465/F41005_p.eps-650_u8avor.jpg",
          },
          {
            id: 138,
            name: "Fume Hoods",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300497/Fume-Hood-Vertical-Sash-5ft-1200x1400_cflv7u.jpg",
          },
          {
            id: 139,
            name: "Pipettes and Pipettors",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300556/71AHjovYN3L_unbqg4.jpg",
          },
          {
            id: 140,
            name: "Refrigerators and Freezers",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300649/reachinrefrigerators-2_x9sple.jpg",
          },
          {
            id: 141,
            name: "Ovens",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300684/lab-oven-1-NO-TEXT-LO100_ujg9xw.jpg",
          },
          { id: 142, name: "Shakers and Mixers", imageUrl: "" },
          { id: 143, name: "Thermometers and Hygrometers", imageUrl: "" },
        ],
      },
      {
        name: "Analyzers",
        products: [
          { id: 144, name: "Hematology Analyzers", imageUrl: "" },
          { id: 145, name: "Biochemistry Analyzers", imageUrl: "" },
          { id: 146, name: "Immunoassay Analyzers", imageUrl: "" },
          { id: 147, name: "Coagulation Analyzers", imageUrl: "" },
          { id: 148, name: "Blood Gas Analyzers", imageUrl: "" },
        ],
      },
      {
        name: "Consumables",
        products: [
          { id: 149, name: "Beakers", imageUrl: "" },
          { id: 150, name: "Flasks", imageUrl: "" },
          { id: 151, name: "Test Tubes", imageUrl: "" },
          { id: 152, name: "Graduated Cylinders", imageUrl: "" },
          { id: 153, name: "Burettes", imageUrl: "" },
          { id: 154, name: "Plastic Beakers", imageUrl: "" },
          { id: 155, name: "Plastic Flasks", imageUrl: "" },
          { id: 156, name: "Plastic Test Tubes", imageUrl: "" },
          { id: 157, name: "Disposable Pipette Tips", imageUrl: "" },
          { id: 158, name: "Gloves", imageUrl: "" },
          { id: 159, name: "Lab Coats", imageUrl: "" },
          { id: 160, name: "Petri Dishes", imageUrl: "" },
          { id: 161, name: "Filter Paper", imageUrl: "" },
          { id: 162, name: "Lab Notebooks", imageUrl: "" },
          { id: 163, name: "Microcentrifuge Tubes", imageUrl: "" },
          { id: 164, name: "Sample Storage Containers", imageUrl: "" },
          { id: 165, name: "Cleaning Brushes", imageUrl: "" },
          { id: 166, name: "Detergents", imageUrl: "" },
          { id: 167, name: "Sterilizing Solutions", imageUrl: "" },
          { id: 168, name: "Pipettes", imageUrl: "" },
          { id: 169, name: "Sterile Containers", imageUrl: "" },
          { id: 170, name: "Blood Collection Sets", imageUrl: "" },
        ],
      },
      {
        name: "Rapid Test Kits",
        products: [
          { id: 171, name: "Infectious Disease Tests", imageUrl: "" },
          { id: 172, name: "Drug of Abuse Tests", imageUrl: "" },
          { id: 173, name: "Pregnancy and Fertility Tests", imageUrl: "" },
          { id: 174, name: "Cardiac Marker Tests", imageUrl: "" },
          { id: 175, name: "Metabolic Tests", imageUrl: "" },
        ],
      },
      {
        name: "Reagents",
        products: [
          { id: 176, name: "Biochemical Reagents", imageUrl: "" },
          { id: 177, name: "Immunological Reagents", imageUrl: "" },
        ],
      },
      {
        name: "Agglutination Test Kits",
        products: [
          { id: 178, name: "Blood Typing Reagents", imageUrl: "" },
          { id: 179, name: "Bacterial Identification", imageUrl: "" },
          { id: 180, name: "Diagnostic Agglutination Tests", imageUrl: "" },
        ],
      },
      {
        name: "Analytical Instruments",
        products: [
          { id: 181, name: "UV-Vis Spectrophotometers", imageUrl: "" },
          { id: 182, name: "Fluorescence Spectrophotometers", imageUrl: "" },
          { id: 183, name: "Gas Chromatographs (GC)", imageUrl: "" },
          { id: 184, name: "Liquid Chromatographs (HPLC)", imageUrl: "" },
          { id: 185, name: "Quadrupole Mass Spectrometers", imageUrl: "" },
          {
            id: 186,
            name: "Time-of-Flight (TOF) Mass Spectrometers",
            imageUrl: "",
          },
          {
            id: 187,
            name: "Atomic Absorption Spectrometers (AAS)",
            imageUrl: "",
          },
          { id: 188, name: "Potentiostats/Galvanostats", imageUrl: "" },
          { id: 189, name: "pH Meters", imageUrl: "" },
          { id: 190, name: "Electron Microscopes (EM)", imageUrl: "" },
          {
            id: 191,
            name: "Differential Scanning Calorimeters (DSC)",
            imageUrl: "",
          },
          { id: 192, name: "Thermogravimetric Analyzers (TGA)", imageUrl: "" },
          { id: 193, name: "Conductivity Meters", imageUrl: "" },
          { id: 194, name: "Refractometers", imageUrl: "" },
          {
            id: 195,
            name: "Optical Emission Spectrometers (OES)",
            imageUrl: "",
          },
          { id: 196, name: "Particle Size Analyzers", imageUrl: "" },
          { id: 197, name: "Gel Electrophoresis Equipment", imageUrl: "" },
        ],
      },
      {
        name: "Microbiology",
        products: [
          { id: 198, name: "Agar Plates", imageUrl: "" },
          { id: 199, name: "Broth Media", imageUrl: "" },
          { id: 200, name: "Specialized Media", imageUrl: "" },
          { id: 201, name: "Stains and Dyes", imageUrl: "" },
          { id: 202, name: "Biochemical Reagents", imageUrl: "" },
          { id: 203, name: "Swabs", imageUrl: "" },
          { id: 204, name: "Inoculation Loops", imageUrl: "" },
          { id: 205, name: "Pathogen Detection Kits", imageUrl: "" },
          { id: 206, name: "Antibiotic Sensitivity Test Kits", imageUrl: "" },
          { id: 207, name: "Control Strains", imageUrl: "" },
          { id: 208, name: "Calibration Standards", imageUrl: "" },
        ],
      },
      {
        name: "Histopathology",
        products: [
          { id: 209, name: "Formalin", imageUrl: "" },
          { id: 210, name: "Bouin's Solution", imageUrl: "" },
          { id: 211, name: "Alcohols", imageUrl: "" },
          { id: 212, name: "Paraffin Wax", imageUrl: "" },
          { id: 213, name: "Resin Media", imageUrl: "" },
          { id: 214, name: "Hematoxylin and Eosin (H&E)", imageUrl: "" },
          { id: 215, name: "Special Stains", imageUrl: "" },
          { id: 216, name: "Slides and Coverslips", imageUrl: "" },
          { id: 217, name: "Staining Racks", imageUrl: "" },
          { id: 218, name: "Disposable Microtome Blades", imageUrl: "" },
          { id: 219, name: "Microtome Parts", imageUrl: "" },
          { id: 220, name: "Control Slides", imageUrl: "" },
          { id: 221, name: "Calibration Standards", imageUrl: "" },
        ],
      },
    ],
  },
  {
    key: "veterinary",
    label: "Veterinary",
    subs: [
      {
        name: "Diagnostic Equipment Kits",
        products: [
          {
            id: 222,
            name: "Ultrasound machines",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765293416/Screen-Shot-2018-05-07-at-3.19.07-PM_y3ynme.png",
          },
          {
            id: 223,
            name: "X-ray systems",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765293524/img_product_xray_002_ztwdxg.jpg",
          },
          {
            id: 224,
            name: "Blood analyzers",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301029/LHTA-B10_w5fwe8.webp",
          },
          {
            id: 225,
            name: "Diagnostic kits",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301287/J1505_wfdopg.jpg",
          },
        ],
      },
      {
        name: "Surgical Instruments",
        products: [
          {
            id: 226,
            name: "Scalpels",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292719/626766_w_lpe9t0.jpg",
          },
          {
            id: 227,
            name: "Forceps",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292770/60211_dnpfmh.webp",
          },
          {
            id: 228,
            name: "Retractors",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765292835/CK71000_01_40_45_50_55_60-cloward-retractor-sharp_zrdkfy.webp",
          },
          {
            id: 229,
            name: "Surgical scissors",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765293320/35ca20c8e03b36ccc2f99b0a0e5e906d_e1uytg.jpg",
          },
          {
            id: 230,
            name: "Sutures",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301527/10-0_box_final_khhqnf.webp",
          },
        ],
      },
      {
        name: "Veterinary Consumables",
        products: [
          { id: 231, name: "Gloves", imageUrl: "" },
          { id: 232, name: "Syringes", imageUrl: "" },
          { id: 233, name: "Needles", imageUrl: "" },
          { id: 234, name: "Bandages", imageUrl: "" },
          { id: 235, name: "IV sets", imageUrl: "" },
        ],
      },
      {
        name: "Wound Care And Bandaging",
        products: [
          { id: 8, name: "Animal Wound Dressing", imageUrl: "" },
          { id: 236, name: "Dressings", imageUrl: "" },
          { id: 237, name: "Wound closure strips", imageUrl: "" },
          { id: 238, name: "Bandages", imageUrl: "" },
          { id: 239, name: "Antiseptics", imageUrl: "" },
        ],
      },
      {
        name: "Grooming And Hygiene",
        products: [
          { id: 240, name: "Shampoos", imageUrl: "" },
          { id: 241, name: "Conditioners", imageUrl: "" },
          { id: 242, name: "Grooming tools", imageUrl: "" },
          { id: 243, name: "Disinfectants", imageUrl: "" },
        ],
      },
    ],
  },
  {
    key: "academic",
    label: "Academic Scientific",
    subs: [
      {
        name: "Laboratory Equipment",
        products: [
          {
            id: 244,
            name: "Microscopes",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301581/th-microscopes-laboratory-microscopes-__33823.original_pdlho7.jpg",
          },
          {
            id: 245,
            name: "Centrifuges",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300061/226R_20open_0_wtbdoi.png",
          },
          {
            id: 246,
            name: "Spectrophotometers",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301699/uv-2600i-plus-uv-2700i-plus-main_otkc6d.jpg",
          },
          {
            id: 247,
            name: "Incubators",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765300295/nu-5700-right-closed_zwpn1u.jpg",
          },
        ],
      },
      {
        name: "Lab Supplies/Glass Wares",
        products: [
          {
            id: 9,
            name: "Laboratory Glassware Set",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301783/product-jpeg-500x500_euyb9z.jpg",
          },
        ],
      },
      {
        name: "Safety Equipment",
        products: [
          {
            id: 10,
            name: "Safety Goggles",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301822/281972_ohtsfm.jpg",
          },
          {
            id: 248,
            name: "Lab Coats",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301889/Lab-Coat_blwiz0.jpg",
          },
          {
            id: 249,
            name: "Fire Extinguishers",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301931/00451870_tiqeqc.jpg",
          },
          {
            id: 250,
            name: "First Aid Kits",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765301980/Grab_N_Go_tm_First_Aid_Kit_Perfect_Car_travel_kit_Alton_Doom_and_Bloom__01614.1558383335_ur4pzk.jpg",
          },
        ],
      },
      {
        name: "Consumables",
        products: [
          {
            id: 251,
            name: "Reagents",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765302047/Laboratory-Reagents-Chemicals_tbekel.jpg",
          },
          {
            id: 252,
            name: "Chemicals",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765302108/Manufacturer_Supplier_and_Exporter_of_Chemistry_Equipments_d9f11e91-5543-45b5-a2b5-2dbab1518656-950370_mzw2zz.jpg",
          },
          {
            id: 253,
            name: "Lab Notebooks",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765302156/19-1137122-11903-STD-00.png-650_tuk51o.jpg",
          },
          {
            id: 254,
            name: "Disposable Gloves",
            imageUrl:
              "https://res.cloudinary.com/doqeslffo/image/upload/v1765302249/718e930XV9L._AC_UF1000_1000_QL80__closv5.jpg",
          },
        ],
      },
    ],
  },
];

const DATA = rawData;

export default DATA;
