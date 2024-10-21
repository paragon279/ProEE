const logotext = "David, Professional Engineer";
const meta = {
    title: "David M",
    description: "I’m David M, licensed Professional Engineer based in United States",
};

const introdata = {
    title: "I’m David M.",
    animated: {
        first: "Electrical & Electronic Engineer",
        second: "PCB Design & Firmware& IoT",
    },
    description: "I am an experienced Electrical & Electronics & IoT Engineer with experience providing full-cycle Electrical Engineering services including Hardware, Firmware, Product Design, Prototyping, and Manufacturing.",
    your_img_url: require('../src/assets/images/david_m.jpg'),
};

const dataabout = {
    title: "About myself",
    aboutme: "I’m David M, licensed Professional Engineer based in United States.I have over 15 years of experience in Electrical & Electronics & IoT Engineering.\n \n  I have practical experience in medical, audio, automotive, Robotics, and industrial products including IoT projects, wearable devices, Smart-home systems, Noise Cancelling Earbuds and Headphones, ECG, EMG, PPG, SpO2 sensors, Blood pressure monitoring, Respiration rate monitoring, automotive control equipment, climate equipment, Radar, Lidar, RF design, Antenna design, hardware equipment for autonomous driving systems, High current and high power electronics (battery chargers, battery balancers, BLDC drivers, frequency converters, inverters, power banks, home power storage systems), High voltage power supplies (up to 30 kV), energy harvesting (solar, piezo, thermal), Solar trackers, Limbs position monitoring, and radio transmitter (2.4GHz, 5GHz) ",
};
const worktimeline = [{
        jobtitle: "Hardware Engineer",
        where: "Dedicated Drones",
        date: "2006-2010",
    },
    {
        jobtitle: "Electrical Design Engineer",
        where: "EscapeSF LLC",
        date: "2010-2013",
    },
    {
        jobtitle: "Electrical Engineer",
        where: "A Squared Engineers",
        date: "2014-2019",
    },
    {
        jobtitle: "Senior Electrical Engineer",
        where: "Meraqi Medical",
        date: "2019-2021",
    // },
    // {
    //     jobtitle: "Electrical Engineer/Manager",
    //     where: "QuestPlay",
    //     date: "2021-2024",
    // },
];

const skills = [
    {
        name: "Electrical Engineering",
        value: 95,
    },
    {
        name: "Electronic Engineering",
        value: 90,
    },
    {
        name: "C/C++",
        value: 95,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Embeddd C",
        value: 90,
    },
    {
        name: "Java",
        value: 80,
    },
    {
        name: "AutoCAD",
        value: 90,
    },
    {
        name: "AltiumDesigner",
        value: 90,
    },
    {
        name: "Proteus",
        value: 90,
    },
    {
        name: "PLC",
        value: 85,
    },
    {
        name: "PCB design",
        value: 98,
    },
    {
        name: "IoT",
        value: 75,
    },
];

const services = [{
        title: "Hardware",
        description: "- PCB design (Altium Designer, KiCad, Eagle), Multi-layer PCB layout (6-12 layers), flex-rigid PCB, HDI routing, dense routing, thermal management\n- PCB Prototype manufacturing, debugging, testing, and validation\n- Analog, Digital Signal Processing, Audio signal processing, High-End Audio amplifiers\n- Gigabit Ethernet and USB-C\n- Power electronics, High current PCB routing up to 100A, Power Supplies\n- High-speed routing with length matching, impedance calculations\n- Component selection, BOM optimization, and preparation of manufacturing documentation",
    },
    {
        title: "Firmware",
        description: "- C, C++, Embedded C, Python, Java, JavaScript\n- STM32, ESP32, ESP8266, nRF51, nRF52, TI, NXP, MSP430, \nNuvoton, Atmel, Beaglebone, PIC, Arduino, Raspberry Pi\n- Compilers & IDE ( GCC, Keil uVision, IAR, Simplicity Studio, Eclipse, CodeWarrior)\n- Robotics\n- AC, DC, BLDC, Step motors\n- Cellular network, GPS/GPRS, GSM\n- Wireless (Bluetooth, BLE, Zigbee, WiFi, Thread, LoRa, LoRaWAN)\n- Wired (I2C, SPI, RS232/RS485, Modbus, CAN)\n- Embedded Linux, Zephyr OS, FreeRTOS, Amazon FreeRTOS, Micrium OS, eCOS",
    },
    {
        title: "IoT",
        description: "- Cloud Platforms Integration (Firebase, AWS IoT, Ayla, Evrythng)",
    },
];

const dataportfolio = [{
        img: require("../src/assets/images/portfolio/1.jpg"),
        description: "Lungs Health Analyzer",
        link: "https://ajprotech.com/selected-work/health-wellness/lungs-health-analyzer.html",
    },
    {
        img: require("../src/assets/images/portfolio/2.jpg"),
        description: "Handheld device for a tabletop game",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/3.jpg"),
        description: "Mobile App controls the device via BLE",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/4.jpg"),
        description: "nRF52 + SIMCOM connect to AWS(MQTTs)",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/5.jpg"),
        description: "Human Body Temperature Monitor",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/6.jpg"),
        description: "CAN Bus IOT Hub",
        link: "#",
    },

    {
        img: require("../src/assets/images/portfolio/7.jpg"),
        description: "PCB Design for Split Mechanical Computer Keyboard",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/8.jpg"),
        description: "Temperature Control With ESP32",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/9.jpg"),
        description: "45W USB Port C and USB A Port.",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/10.jpg"),
        description: "ESP32 LED driver and Audio driver",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/11.jpg"),
        description: "keyboard with USB-C connector and 14 LED RGB",
        link: "#",
    },
    {
        img: require("../src/assets/images/portfolio/12.jpg"),
        description: "USB-C to HDMI Adapter",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "econsultant664@gmail.com",
    YOUR_FONE: "(763)286-6209",
    description: "Please feel free to contact me if you have any issues. I'll do my best to help you. Also, if you have any good ideas, don’t hesitate to reach out. I’ll work to make your ideas a reality.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_y9ok36w",
    YOUR_TEMPLATE_ID: "template_14tfaqg",
    YOUR_USER_ID: "zhMWs94qwBAAPEDY0",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
