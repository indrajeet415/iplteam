const teams = [
  {
    id: 1,
    name: "Mumbai Indians",
    icon: "https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png",
    topBatsman: "Rohit Sharma",
    topBowler: "Jasprit Bumrah",
    championshipsWon: 5,
    code: "MI",
    players: [
      {
        id: 101,
        playerName: "Rohit Sharma",
        photo:
          "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcR4DwzomiTwNwUMMGI-iOW-QKZx-JEyE1Z8ZiO_tg3233BGI1B1MFk3hJBZpgMwfdzP&psig=AOvVaw2BrFf975AHswzxA23n1BnE&ust=1693824383719000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCUuNqhjoEDFQAAAAAdAAAAABAD",
        from: "MI",
        price: "15 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 102,
        playerName: "Jasprit Bumrah",
        photo:
          "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTC3WTBnfo5D8SntlW8q2Sii0JYWy7kNYX38HdwgbBlykeX8Xclsn9v-52ULETXWidNxw-JMaP1RwkYUsM",
        from: "MI",
        price: "12 Cr",
        isPlaying: true,
        role: "Bowler",
      },
      {
        id: 103,
        playerName: "Hardik Pandya",
        photo:
          "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/01/hardik-pandya-mumbai-indians-1515126119.jpg",
        from: "MI",
        price: "11 Cr",
        isPlaying: true,
        role: "All-rounder",
      },
      {
        id: 104,
        playerName: "Kieron Pollard",
        photo:
          "https://www.sportzpics.co.za/img-get2/I0000sp2O6k3Lmb0/fit=1000x750/Kieron-Pollard.jpg",
        from: "MI",
        price: "10 Cr",
        isPlaying: true,
        role: "All-rounder",
      },
      {
        id: 105,
        playerName: "Quinton de Kock",
        photo:
          "https://cdn.24.co.za/files/Cms/General/d/9313/e7d82950d6034f318029e1158add8d6f.png",
        from: "MI",
        price: "8 Cr",
        isPlaying: true,
        role: "Batsman",
      },
    ],
  },
  {
    id: 2,
    name: "Chennai Super Kings",
    icon: "https://i.pinimg.com/originals/70/52/1b/70521baac89be4d4cb2f223bbf67c974.png",
    topBatsman: "Suresh Raina",
    topBowler: "Dwayne Bravo",
    championshipsWon: 4,
    code: "CSK",
    players: [
      {
        id: 201,
        playerName: "Suresh Raina",
        photo:
          "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/14.png",
        from: "CSK",
        price: "11 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 202,
        playerName: "MS Dhoni",
        photo:
          "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/14.png",
        from: "CSK",
        price: "15 Cr",
        isPlaying: true,
        role: "Wicketkeeper",
      },
      {
        id: 203,
        playerName: "Dwayne Bravo",
        photo:
          "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/02/jpg-1644591348.jpg",
        from: "CSK",
        price: "8 Cr",
        isPlaying: true,
        role: "All-rounder",
      },
      {
        id: 204,
        playerName: "Ravindra Jadeja",
        photo:
          "https://www.manatelangana.news/wp-content/uploads/2021/03/jaddu.jpg",
        from: "CSK",
        price: "10 Cr",
        isPlaying: true,
        role: "All-rounder",
      },
      {
        id: 205,
        playerName: "Ambati Rayudu",
        photo:
          "https://kheltalk.com/wp-content/uploads/2023/04/Ambati-Rayudu-1.jpg",
        from: "CSK",
        price: "6 Cr",
        isPlaying: true,
        role: "Batsman",
      },
    ],
  },
  {
    id: 3,
    name: "Royal Challengers Bangalore",
    icon: "https://ss-i.thgim.com/public/cricket/article30817560.ece/alternates/FREE_1200/rcb-new-logojpg",
    topBatsman: "Virat Kohli",
    topBowler: "Yuzvendra Chahal",
    championshipsWon: 0,
    code: "RCB",
    players: [
      {
        id: 301,
        playerName: "Virat Kohli",
        photo:
          "https://static.toiimg.com/thumb/msid-89363744,width-1280,resizemode-4/89363744.jpg",
        from: "RCB",
        price: "12 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 302,
        playerName: "AB de Villiers",
        photo:
          "https://img.onmanorama.com/content/dam/mm/en/sports/cricket/images/2021/11/19/abd.jpg.transform/schema-4x3/image.jpg",
        from: "RCB",
        price: "11 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 303,
        playerName: "Yuzvendra Chahal",
        photo:
          "https://e1.pxfuel.com/desktop-wallpaper/568/313/desktop-wallpaper-100th-ipl-scalp-for-yuzvendra-chahal-yuzvendra-chahal-rcb.jpg",
        from: "RCB",
        price: "7 Cr",
        isPlaying: true,
        role: "Bowler",
      },
      {
        id: 304,
        playerName: "Devdutt Padikkal",
        photo:
          "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/320000/320068.6.jpg",
        from: "RCB",
        price: "5 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 305,
        playerName: "Glenn Maxwell",
        photo:
          "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png",
        from: "RCB",
        price: "8 Cr",
        isPlaying: true,
        role: "All-rounder",
      },
    ],
  },
  {
    id: 4,
    name: "Kolkata Knight Riders",
    icon: "https://i.pinimg.com/originals/1e/0c/b5/1e0cb56e44ebf1f8af50d659c6c67288.png",
    topBatsman: "Andre Russell",
    topBowler: "Sunil Narine",
    championshipsWon: 2,
    code: "KKR",
    players: [
      {
        id: 401,
        playerName: "Andre Russell",
        photo:
          "https://www.hindustantimes.com/ht-img/img/2023/03/24/550x309/PTI05-09-2022-000243B-0_1652859438774_1679661957377_1679661957377.jpg",
        from: "KKR",
        price: "10 Cr",
        isPlaying: true,
        role: "All-rounder",
      },
      {
        id: 402,
        playerName: "Sunil Narine",
        photo: "https://imgk.timesnownews.com/story/narine-kkr-bowler-ians.jpg",
        from: "KKR",
        price: "8 Cr",
        isPlaying: true,
        role: "All-rounder",
      },
      {
        id: 403,
        playerName: "Shubman Gill",
        photo:
          "https://media.crictracker.com/media/featureimage/2021/10/Shubman-Gill.jpg",
        from: "KKR",
        price: "6 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 404,
        playerName: "Eoin Morgan",
        photo: "https://static.toiimg.com/photo/msid-86343946/86343946.jpg",
        from: "KKR",
        price: "9 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 405,
        playerName: "Pat Cummins",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/7/76/Pat_Cummins.jpg",
        from: "KKR",
        price: "15.5 Cr",
        isPlaying: true,
        role: "Bowler",
      },
      // Add more players for KKR if needed
    ],
  },
  {
    id: 5,
    name: "Sunrisers Hyderabad",
    icon: "https://static.toiimg.com/thumb/msid-72902421,width-400,resizemode-4/72902421.jpg",
    topBatsman: "David Warner",
    topBowler: "Bhuvneshwar Kumar",
    championshipsWon: 1,
    code: "SRH",
    players: [
      {
        id: 501,
        playerName: "David Warner",
        photo:
          "https://w0.peakpx.com/wallpaper/721/69/HD-wallpaper-david-warner-cricket-indian-premier-league-ipl-orange-army-srh-sunrisers-hyderabad.jpg",
        from: "SRH",
        price: "12 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 502,
        playerName: "Kane Williamson",
        photo: "https://images.indianexpress.com/2020/09/williamson-1200.jpg",
        from: "SRH",
        price: "8.5 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 503,
        playerName: "Rashid Khan",
        photo: "https://static.toiimg.com/photo/msid-78397380/78397380.jpg",
        from: "SRH",
        price: "9 Cr",
        isPlaying: true,
        role: "Bowler",
      },
      {
        id: 504,
        playerName: "Jonny Bairstow",
        photo:
          "https://static.toiimg.com/thumb/msid-68704006,width-400,resizemode-4/68704006.jpg",
        from: "SRH",
        price: "6.5 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        id: 505,
        playerName: "Bhuvneshwar Kumar",
        photo:
          "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1680181892.jpg",
        from: "SRH",
        price: "8.5 Cr",
        isPlaying: true,
        role: "Bowler",
      },
    ],
  },
];

function storeDataInLocalStorage() {
  if (!localStorage.getItem("teamsData")) {
    localStorage.setItem("teamsData", JSON.stringify(teams));
  }
}
storeDataInLocalStorage();
