// 1. VARIABLES
const nearContainer = document.querySelector("[data-events='near']");
const onlineContainer = document.querySelector("[data-events='online']");
const eventsList = document.querySelector("[data-events='list']");
const dateMenu = document.querySelector("[data-filter-menu='date']");

// 2. EVENTS DATA
const eventsData = [
  {
    id: 1,
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2026, 9, 24, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    id: 2,
    title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2026, 9, 24, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    id: 3,
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2026, 9, 30, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    id: 4,
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2026, 9, 28, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    id: 5,
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2026, 9, 29, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    id: 6,
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2026, 9, 29, 19),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
  {
    id: 7,
    title: "Weekend Photo Walk in Brooklyn",
    description: "Brooklyn Photo Walk",
    date: new Date(2026, 10, 1, 10),
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 28,
    category: "Hobbies and Passions",
    distance: 10,
  },
  {
    id: 8,
    title: "Startup Founders Coffee Chat",
    description: "NYC Founders Circle",
    date: new Date(2026, 10, 3, 18),
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 18,
    category: "Business",
    distance: 5,
  },
  {
    id: 9,
    title: "Morning Yoga in the Park",
    description: "Outdoor Yoga Group",
    date: new Date(2026, 10, 4, 8),
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 36,
    category: "Health and Wellbeing",
    distance: 15,
  },
  {
    id: 10,
    title: "Board Game Night for New Friends",
    description: "Tabletop Meetup",
    date: new Date(2026, 10, 5, 19),
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 22,
    category: "Social Activities",
    distance: 25,
  },
  {
    id: 11,
    title: "Product Design Critique",
    description: "Design Circle NYC",
    date: new Date(2026, 10, 6, 18, 30),
    image:
      "https://images.unsplash.com/photo-1581291518857-4d0762f4a7c4?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 31,
    category: "Technology",
    distance: 50,
  },
  {
    id: 12,
    title: "Creative Writing Sprint",
    description: "Online Writing Group",
    date: new Date(2026, 10, 8, 16),
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1037&auto=format&fit=crop",
    type: "online",
    attendees: 54,
    category: "Hobbies and Passions",
    distance: 10,
  },
];

// 3. CLASSES
class MeetupEvent {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.date = new Date(data.date.getTime());
    this.image = data.image;
    this.type = data.type;
    this.attendees = data.attendees;
    this.category = data.category;
    this.distance = data.distance;
  }

  getDateLabel() {
    return formatDate(this.date);
  }

  getDateKey() {
    return [
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate(),
      this.date.getHours(),
      this.date.getMinutes(),
    ].join("-");
  }

  getCategoryLabel() {
    if (this.type === "offline") {
      return `${this.category} (${this.distance} km)`;
    }

    return this.category;
  }

  matches(filters) {
    if (filters.type && this.type !== filters.type) {
      return false;
    }

    if (filters.category && this.category !== filters.category) {
      return false;
    }

    if (filters.distance && this.distance > Number(filters.distance)) {
      return false;
    }

    if (filters.date && this.getDateKey() !== filters.date) {
      return false;
    }

    return true;
  }
}

class EventsStore {
  constructor() {
    this.events = [];

    eventsData.forEach((item) => {
      this.events.push(new MeetupEvent(item));
    });
  }

  getByType(type) {
    return this.events.filter((event) => event.type === type);
  }

  filter(filters) {
    return this.events.filter((event) => event.matches(filters));
  }

  getUniqueDates() {
    const dates = [];

    this.events.forEach((event) => {
      const alreadyAdded = dates.some((item) => item.key === event.getDateKey());

      if (!alreadyAdded) {
        dates.push({
          key: event.getDateKey(),
          label: event.getDateLabel(),
          time: event.date.getTime(),
        });
      }
    });

    dates.sort((first, second) => first.time - second.time);

    return dates;
  }
}

const store = new EventsStore();

// 4. FUNCTIONS
function formatDate(date) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const suffix = date.getHours() >= 12 ? "PM" : "AM";
  const hours = date.getHours() % 12 || 12;

  return `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} · ${hours}:${minutes} ${suffix}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderBadge(event) {
  if (event.type !== "online") {
    return "";
  }

  return `
    <span class="event-badge">
      <img class="event-badge__icon" src="assets/images/online.svg" alt="" width="16" height="16">
      <span class="event-badge__text">Online Event</span>
    </span>
  `;
}

// 5. RENDER EVENTS
function renderCard(event) {
  const attendees = event.attendees
    ? `
      <span class="event-card__stat">
        <img src="assets/images/attendees.svg" alt="" width="20" height="20">
        <span>${event.attendees} going</span>
      </span>
    `
    : "";

  return `
    <article class="event-card">
      <div class="event-card__media">
        <img class="event-card__image" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.title)}">
        ${renderBadge(event)}
      </div>
      <div class="event-card__body">
        <h3 class="event-card__title">${escapeHtml(event.title)}</h3>
        <p class="event-card__category">${escapeHtml(event.getCategoryLabel())}</p>
        <div class="event-card__details">
          <span class="event-card__stat">
            <img src="assets/images/calendar.svg" alt="" width="20" height="20">
            <span class="event-card__date">${escapeHtml(event.getDateLabel())}</span>
          </span>
          <div class="event-card__stats">
            ${attendees}
            <span class="event-card__stat">
              <img src="assets/images/ticket.svg" alt="" width="20" height="20">
              <span>Free</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderRow(event) {
  const attendees = event.attendees
    ? `<p class="event-row__attendees">${event.attendees} attendees</p>`
    : "";

  return `
    <article class="event-row">
      <div class="event-row__media">
        <img class="event-row__image" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.title)}">
        ${renderBadge(event)}
      </div>
      <div class="event-row__body">
        <p class="event-row__date">${escapeHtml(event.getDateLabel())}</p>
        <h2 class="event-row__title">${escapeHtml(event.title)}</h2>
        <p class="event-row__category">${escapeHtml(event.getCategoryLabel())}</p>
        ${attendees}
      </div>
    </article>
  `;
}

function renderEvents(events, container, view) {
  if (!container) {
    return;
  }

  if (!events.length) {
    container.innerHTML = `<p class="events-empty">No events found</p>`;
    return;
  }

  const markup = events
    .map((event) => (view === "row" ? renderRow(event) : renderCard(event)))
    .join("");

  container.innerHTML = markup;
}

function renderHome() {
  if (nearContainer) {
    renderEvents(store.getByType("offline"), nearContainer, "card");
  }

  if (onlineContainer) {
    renderEvents(store.getByType("online"), onlineContainer, "card");
  }
}

// 6. FILTERS
const selectedFilters = {
  type: "",
  distance: "",
  category: "",
  date: "",
};

function fillDateOptions() {
  if (!dateMenu) {
    return;
  }

  store.getUniqueDates().forEach((dateItem) => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    button.className = "filter__option";
    button.type = "button";
    button.dataset.value = dateItem.key;
    button.textContent = dateItem.label;
    item.append(button);
    dateMenu.append(item);
  });
}

function closeFilters(except) {
  document.querySelectorAll(".filter").forEach((filter) => {
    if (filter === except) {
      return;
    }

    const menu = filter.querySelector(".filter__menu");
    const button = filter.querySelector(".filter__button");

    filter.classList.remove("filter_open");

    if (menu) {
      menu.hidden = true;
    }

    if (button) {
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function applyFilters() {
  const events = store.filter(selectedFilters);
  renderEvents(events, eventsList, "row");
}

function initFilters() {
  if (!eventsList) {
    return;
  }

  fillDateOptions();

  document.querySelectorAll(".filter").forEach((filter) => {
    const key = filter.dataset.filter;
    const button = filter.querySelector(".filter__button");
    const label = filter.querySelector(".filter__label");
    const menu = filter.querySelector(".filter__menu");

    button.addEventListener("click", () => {
      const willOpen = menu.hidden;

      closeFilters(filter);
      menu.hidden = !willOpen;
      filter.classList.toggle("filter_open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
    });

    menu.addEventListener("click", (event) => {
      const option = event.target.closest(".filter__option");

      if (!option) {
        return;
      }

      selectedFilters[key] = option.dataset.value;
      label.textContent = option.textContent;
      menu.hidden = true;
      filter.classList.remove("filter_open");
      button.setAttribute("aria-expanded", "false");
      applyFilters();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".filter")) {
      closeFilters();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFilters();
    }
  });

  applyFilters();
}

// 7. EVENT LISTENERS
renderHome();
initFilters();
