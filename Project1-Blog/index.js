const data = [
  {
    id: 1,
    banner: "https://images.unsplash.com/photo-1528502668750-d2c5a487d2f6",
    title: "Exploring the Rocky Mountains",
    text: "A comprehensive guide to hiking and exploring the rugged terrains of the Rocky Mountains.",
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "John Carter",
    date: "2024-09-01T00:00:00Z",
    tag: "Travel",
  },
  {
    id: 2,
    banner: "https://images.unsplash.com/photo-1590872760918-3f3c823e887e",
    title: "Mastering the Art of Japanese Cuisine",
    text: "Dive into the world of sushi, ramen, and more with this step-by-step guide to Japanese cooking.",
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Hana Sato",
    date: "2024-08-22T00:00:00Z",
    tag: "Food",
  },
  {
    id: 3,
    banner: "https://images.unsplash.com/photo-1562183248-20aa07aa7411",
    title: "The Future of Artificial Intelligence",
    text: "An in-depth analysis of AI advancements and how they will shape the future.",
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Alan Turing",
    date: "2024-07-15T00:00:00Z",
    tag: "Technology",
  },
  {
    id: 4,
    banner: "https://images.unsplash.com/photo-1588731234150-6d1e3ab78e4b",
    title: "Sustainable Fashion Trends",
    text: "Exploring the latest eco-friendly trends in the fashion industry.",
    avatar: "https://i.pravatar.cc/150?img=4",
    name: "Sophia Lee",
    date: "2024-06-10T00:00:00Z",
    tag: "Fashion",
  },
  {
    id: 5,
    banner: "https://images.unsplash.com/photo-1599706854965-2a2315f2f789",
    title: "A Photographer’s Guide to Portrait Lighting",
    text: "Techniques to capture the perfect lighting for portrait photography.",
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Michael Zhang",
    date: "2024-05-18T00:00:00Z",
    tag: "Photography",
  },
  {
    id: 6,
    banner: "https://images.unsplash.com/photo-1605240342837-e29974c3da74",
    title: "Yoga for Beginners: Finding Your Flow",
    text: "A beginner’s guide to yoga practices for improved health and mindfulness.",
    avatar: "https://i.pravatar.cc/150?img=6",
    name: "Emma Johnson",
    date: "2024-04-30T00:00:00Z",
    tag: "Health",
  },
  {
    id: 7,
    banner: "https://images.unsplash.com/photo-1569245815337-bb9510d4edc3",
    title: "The Rise of Electric Vehicles",
    text: "How electric vehicles are revolutionizing the automotive industry.",
    avatar: "https://i.pravatar.cc/150?img=7",
    name: "Robert Miles",
    date: "2024-03-12T00:00:00Z",
    tag: "Automotive",
  },
  {
    id: 8,
    banner: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    title: "Living Minimalistically: Less is More",
    text: "Tips on decluttering your life and embracing minimalism.",
    avatar: "https://i.pravatar.cc/150?img=8",
    name: "Isabelle Rodriguez",
    date: "2024-02-27T00:00:00Z",
    tag: "Lifestyle",
  },
  {
    id: 9,
    banner: "https://images.unsplash.com/photo-1517242024301-79d6af2b0f79",
    title: "Remote Work: Staying Productive",
    text: "Strategies for maintaining productivity while working remotely.",
    avatar: "https://i.pravatar.cc/150?img=9",
    name: "Liam Brown",
    date: "2024-01-15T00:00:00Z",
    tag: "Business",
  },
  {
    id: 10,
    banner: "https://images.unsplash.com/photo-1531219432764-0b4a449e72a5",
    title: "Top 10 Must-Read Sci-Fi Novels",
    text: "A curated list of the best science fiction novels for book lovers.",
    avatar: "https://i.pravatar.cc/150?img=10",
    name: "Alice Turner",
    date: "2023-12-01T00:00:00Z",
    tag: "Books",
  },
];

const grid_container = document.querySelector(".grid");

data?.map((item) => {
  const card = document.createElement("div");
  const banner = document.createElement("img");
  const title = document.createElement("p");
  const profile = document.createElement("div");
  const text = document.createElement("p");
  const avatar = document.createElement("img");
  const pname = document.createElement("p");
  const date = document.createElement("p");
  const tag = document.createElement("p");
  title.textContent = item.title;
  banner.src = item.avatar;
  avatar.src = item.avatar;
  pname.textContent = item.name;
  date.textContent = new Date(item.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  tag.textContent = item.tag;
  text.textContent = item.text;

  profile.append(avatar);
  profile.append(pname);
  profile.append(date);
  profile.append(tag);

  card.append(banner);
  card.append(title);
  card.append(text);
  card.append(profile);

  banner.classList.add("image");
  card.classList.add("card");
  profile.classList.add("profile");
  text.classList.add("text");
  title.classList.add("title");
  pname.classList.add("pname");
  tag.classList.add("tag");
  date.classList.add("date");
  avatar.classList.add("avatar");

  grid_container.append(card);
});
