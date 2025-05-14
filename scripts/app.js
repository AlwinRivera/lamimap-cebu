const { createApp } = Vue;

createApp({
  data() {
    return {
      karinderyas: JSON.parse(localStorage.getItem("karinderyas")) || [
        {
          name: "Nanay's Lutong Bahay",
          location: "Mabolo, near the church",
          price: "₱60–₱90",
          map: "https://maps.google.com"
        }
      ],
      newName: '',
      newLocation: '',
      newPrice: '',
      newMap: ''
    };
  },
  methods: {
    addKarinderya() {
      const newK = {
        name: this.newName,
        location: this.newLocation,
        price: this.newPrice,
        map: this.newMap
      };
      this.karinderyas.push(newK);
      localStorage.setItem("karinderyas", JSON.stringify(this.karinderyas));
      this.newName = '';
      this.newLocation = '';
      this.newPrice = '';
      this.newMap = '';
    }
  }
}).mount('#app');
