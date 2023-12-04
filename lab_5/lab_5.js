const news = [
  {
    id: 1,
    title: "Новость 1",
    content: `Новость 1: 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis! <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! 
      Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? 
      Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, 
      enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.`,
  },
  {
    id: 2,
    title: "Новость 2",
    content: `Новость 2: 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias. <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! 
      Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? 
      Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, 
      enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.`,
  },
  {
    id: 3,
    title: "Новость 3",
    content: `Новость 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! 
      Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? 
      Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, 
      enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.`,
  },
];

const overlay = document.querySelector("._overlay");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");

const openModal = (id) => {
  const item = news.find((d) => d.id === id);

  if (item) {
    modal.style.display = "block";
    modalTitle.innerHTML = item.title;
    modalContent.innerHTML = item.content;
    toogleOverlay();
  }
};

const closeModal = () => {
  modal.style.display = "none";
  toogleOverlay();
};

function toogleOverlay() {
  overlay.classList.toggle("hidden");
}
