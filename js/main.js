const data = [
    "๐ Hey! I'm still working on this!",
    "๐ง Website under construction ๐ง",
    "โ๏ธ NovAtion is not available at the moment.",
    "๐ซ You're not supposed to be here...",
    "๐พ Currently playing CS:GO...",
    "๐ฉ I'm uh... not in front of my computer right now...",
    "๐ Slowly working on this website.",
    "๐ What's the password?",
    "๐งจ QUICK! GET OUT! THIS WEBSITE IS ABOUT TO BLOW UP!",
    "๐ BOOOH! Haha did I scare you? Now go away.",
    "๐ง Sorry, everything is broken. This is gonna take a while.",
    "๐โโ๏ธ What are you doing? Go empty the dishwasher!",
    "โ๏ธ Go outside! The weather is beautiful!",
    "๐ป Y0u g0t h4ck3d. Y0u sh0ld pr0b4bly turn 0ff y0ur c0mput3r.",
    "๐พ LOADING WEBSITE... 12 YEARS REMAINING...",
    "๐ฅ๏ธ Windows is rebooting your computer to update things... Be patient...",
    "๐ธ The server is currently getting kidnapped by aliens.",
    "๐ HEY! You're on a private land here! I'm calling the cops!"
];

document.getElementById("title").innerText = data[Math.floor(Math.random() * data.length)];