import userImg1 from "../../public/images/elonmusk.jpg";
import userImg2 from "../../public/images/jeff.jpg";
import userImg3 from "../../public/images/billgates.jpg";
import userImg4 from "../../public/images/johnwick.jpg";
import userImg5 from "../../public/images/ghostrider.jpg";
import userImg6 from "../../public/images/ironman.jpg";

export default function handler(req, res) {
  let allPosts = [
    {
      profilePhoto: userImg1,
      userName: "Elon Musk",
      dateTime: "20/11/2022, 04:54:45",
      message: "Whats up Elon Musk!!",
      img: "https://drive.google.com/uc?id=17OfWQcnJcQkSKZ2-kBb7Lg2Le08HrMUh&export=download",
      comments: [
        {
          userName: "Jeff Bezos",
          userImg: userImg2,
          comment: "Congratulations Elon!🤩🤩",
        },
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "I am Iron Man🔥🔥🔥🔥🔥🔥",
        },
        {
          userName: "John Wick",
          userImg: userImg4,
          comment: "Lets see John Wick Chapter 4 ⚔️🔥",
        },
      ],
    },
    {
      profilePhoto: userImg2,
      userName: "Jeff Bezos",
      dateTime: "20/11/2022, 04:54:45",
      message: "2nd Richest Person ?",
      img: "https://drive.google.com/uc?id=1asqBl8uxPOF8PIPQknbigIT9o8X_oPrK&export=download",
      comments: [
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "I am Iron Man🔥🔥🔥",
        },
        {
          userName: "Ghost Rider",
          userImg: userImg5,
          comment: "I am Ghost Rider🏎️🔥🏎️🔥",
        },
        {
          userName: "Elon Musk",
          userImg: userImg1,
          comment: "I am Elon Musk🚀🛰️",
        },
      ],
    },
    {
      profilePhoto: userImg3,
      userName: "Bill Gates",
      dateTime: "20/11/2022, 04:54:45",
      message: "Windows 11 is the future ?!",
      img: "https://drive.google.com/uc?id=1a7rZ4Z6uykT4IUYyy3lzej4KxB-Tr_9l&export=download",
      comments: [
        {
          userName: "Jeff Bezos",
          userImg: userImg2,
          comment: "I am Jeff Bezos🌎🛍️",
        },
        {
          userName: "Bill Gates",
          userImg: userImg3,
          comment: "I am Bill Gates💻🖥️",
        },
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "I am Iron Man🔥🔥🔥",
        },
      ],
    },
    {
      profilePhoto: userImg4,
      userName: "John Wick",
      dateTime: "20/11/2022, 04:54:45",
      message: "John Wick 3 comming soon...",
      img: "https://drive.google.com/uc?id=1yqiP1dkvliof5UxuudKg_kkMZtxnWl1X&export=download",
      comments: [
        {
          userName: "Elon Musk",
          userImg: userImg1,
          comment: "I am Elon Musk🚀🛰️🚀🛰️",
        },
        {
          userName: "Bill Gates",
          userImg: userImg3,
          comment: "I am Bill Gates💻🖥️",
        },
        {
          userName: "John Wick",
          userImg: userImg4,
          comment: "I am John Wick⚔️🔥⚔️🔥",
        },
        {
          userName: "Ghost Rider",
          userImg: userImg5,
          comment: "I am Ghost Rider🏎️🔥🏎️🔥",
        },
      ],
    },
    {
      profilePhoto: userImg5,
      userName: "Ghost Rider",
      dateTime: "20/11/2022, 04:54:45",
      message: "Lets Ride it!!!",
      img: "https://drive.google.com/uc?id=1_gLhrr5UY4CVkNmTAK2lLLALzAmMiAoP&export=download",
      comments: [
        {
          userName: "John Wick",
          userImg: userImg4,
          comment: "I am John Wick⚔️🔥",
        },
        {
          userName: "Jeff Bezos",
          userImg: userImg2,
          comment: "I am Jeff Bezos🌎🛍️",
        },
        {
          userName: "Bill Gates",
          userImg: userImg3,
          comment: "I am Bill Gates💻🖥️",
        },
      ],
    },
    {
      profilePhoto: userImg6,
      userName: "Iron Man",
      dateTime: "20/11/2022, 04:54:45",
      message: "I am Iron Man🔥🔥🔥 ;-)",
      video: "https://youtu.be/cfVY9wLKltA",
      comments: [
        {
          userName: "Ghost Rider",
          userImg: userImg5,
          comment: "I am Ghost Rider🏎️🔥🏎️🔥",
        },
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "Give me Thanooooooossss!!!!!!!!!!!🤯🤬🤯🤬🤯🤬",
        },
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "Give me Thanooooooossss!!!!!!!!!!!🤯🤬🤯🤬🤯🤬",
        },
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "Give me Thanooooooossss!!!!!!!!!!!🤯🤬🤯🤬🤯🤬",
        },
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "Giveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee Thanooooooossssssssssssssssssssssssssssssss!!!!!!!!!!!🤯🤬🤯🤬🤯🤬🤯🤬🤯🤬🤯🤬🤯🤬🤯🤬🤯🤬",
        },
        {
          userName: "Iron Man",
          userImg: userImg6,
          comment: "Give me Thanooooooossss!!!!!!!!!!!🤯🤬🤯🤬🤯🤬🤯🤬🤯🤬🤯🤬",
        },
      ],
    },
  ];

  res.status(200).json({ posts: allPosts });
}
