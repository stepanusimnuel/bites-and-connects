// data store that reactives

const key = "events";

let eventsJson = localStorage.getItem(key);

if (!eventsJson) {
  localStorage.setItem(
    key,
    JSOn.stringify([
      {
        nama: "Event 1",
        menu: "https://drive.google.com/drive/u/0/folders/1NJC9Xig3be0UdhthnBJtnzXzdRWfYzNS",
        pesanan: [
          ["Mie Ayam", 1, "15000"],
          ["Bakso Goreng", 1, "20000"],
          ["Es Jeruk", 1, "5000"],
        ],
        protes: [],
        status: false,
        disabled: false,
        deskripsi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint porro molestias accusantium quis ab aspernatur optio sed unde blanditiis! Aut voluptatibus quidem assumenda minima voluptatum!",
        gambar: "https://source.unsplash.com/500x201",
      },
      {
        nama: "Event 2",
        menu: "https://drive.google.com/file/d/1-5-O7QTTz41Asifkeaip8M1sT3LXM7rs/view",
        pesanan: [
          ["Indomie Goreng", 1, "10000"],
          ["Susu Murni", 1, "8000"],
        ],
        protes: [],
        status: true,
        disabled: true,
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, repellat!",
        gambar: "https://source.unsplash.com/301x200",
      },
      {
        nama: "Event 3",
        menu: "https://atmosphere.co.id/jardin/",
        pesanan: [
          ["Kaki Anak Kecil", 1, "123456"],
          ["Air Putih", 2, "11000"],
        ],
        protes: [],
        status: false,
        disabled: false,
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur voluptate veniam libero beatae nisi.",
        gambar: "https://source.unsplash.com/300x200",
      },
    ])
  );
  eventsJson = localStorage.getItem(key);
}

let eventsStore = JSON.parse(eventsJson);

function save() {
  localStorage.setItem(key, JSON.stringify(eventsStore));
}

export default {
  getAllEvents() {
    return eventsStore;
  },
  getSingleEvent(index) {
    return eventsStore[index];
  },
  addProtesUser(index, text) {
    const obj = { msg: text, isUser: 1 };
    eventsStore[index].protes.push(obj);
    save();
  },
  addProtesAdmin(index, tempText) {
    let textArr = tempText.split(" ");
    const randNum = Math.floor(Math.random() * textArr.length) + 1;
    let text = "";
    for (let i = 1; i <= randNum; i++) {
      text += textArr[i];
      text += " ";
    }
    const obj = { msg: text, isUser: 0 };
    eventsStore[index].protes.push(obj);
    save();
  },
  addUserOrder(index, data) {
    eventsStore[index].pesanan.push(...data);
    save();
  },
};
