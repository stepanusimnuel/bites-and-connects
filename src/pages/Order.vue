<template>
  <div class="border rounded-sm p-4">
    <div class="w-full text-xl lg:text-3xl font-bold p-4">Order Page</div>

    <div class="container mx-auto">
      <div class="w-full px-4"></div>

      <div class="mt-6 p-6 bg-slate-700">
        <ul class="font-light text-lg text-white" v-for="(e, index) in events" :key="index">
          <li class="cursor-pointer text-primary hover:text-white capitalize" @click.prevent="eventLinkClick(index)" :class="{ 'text-sky-100': activeEvent == index }">{{ e.nama }}</li>
        </ul>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-8 my-10" v-if="events[activeEvent]">
          <p class="text-center"><a :href="events[activeEvent].menu" class="text-white font-medium text-xl w-full bg-primary rounded-full inline-block p-2 hover:opacity-90">Lihat Menu</a></p>
        </div>

        <div class="w-full px-4 bg-slate-100 p-4">
          <div class="w-full">
            <h3 class="font-bold text-3xl text-secondary">Form Pemesanan</h3>
          </div>
          <div class="w-full px-4 py-2 bg-slate-100">
            <div class="w-full">
              <h4 class="font-semibold md:text-lg text-2xl mb-2">Pesanan</h4>
            </div>
            <div class="w-1/3 text-secondary flex justify-between">
              <label for="menu">Menu</label>
              <input type="text" id="menu" name="menu" placeholder="Mie Ayam" class="placeholder: p-1 mr-3" v-model="order[0]" />
              <input type="number" name="quantity" min="1" value="1" class="p-1 w-8" v-model="order[1]" />
            </div>
            <div class="w-full md:w-[120px]">
              <button type="button" class="bg-slate-700 w-full text-white mt-4 rounded-md p-2 text-center hover:bg-secondary" @click.prevent="addKeranjang()">+ Keranjang</button>
            </div>
            <div class="w-full py-4">
              <h4 class="text-xl lg:text-3xl font-bold">Keranjang Anda</h4>
              <p v-if="!carts.length" class="pt-2 px-4">Keranjang masih kosong</p>
              <ul v-if="carts.length">
                <li class="flex justify-between" v-for="(cart, index) in carts" :key="index">
                  <span>{{ cart[0] }}</span>
                  <span>{{ cart[1] }}</span>
                </li>
              </ul>
            </div>
            <div class="w-full my-6">
              <button
                type="submit"
                name="kirim-pesanan"
                class="text-white font-medium text-xl w-full bg-primary rounded-full inline-block p-2 hover:opacity-90 disabled:opacity-50"
                @click.prevent="kirimOrder()"
                :disabled="events[activeEvent].disabled && !carts.length"
              >
                Pesan
              </button>
              <p class="px-4 pt-2" v-if="events[activeEvent].disabled">Event sudah selesai, Anda tidak bisa memesan lagi</p>
            </div>
          </div>
        </div>

        <div class="w-full px-4">
          <div class="w-full">
            <h3 class="font-bold text-3xl text-secondary">Pesanan Anda</h3>
          </div>
          <div class="mt-2 mb-2 w-full border-t border-b border-dashed border-slate-500">
            <ul class="my-2 text-base" v-for="(e, index) in events" :key="index">
              <li class="flex justify-between" v-if="index == activeEvent" v-for="(pesanan, idx) in e.pesanan" :key="idx">
                <span>{{ pesanan[1] }} {{ pesanan[0] }}</span>
                <span>{{ pesanan[1] }} x Rp{{ pesanan[2] }}</span>
              </li>
            </ul>
          </div>
          <div class="w-full">
            <p class="text-end" v-if="!isNaN(tax)">(Rp{{ tax }})</p>
          </div>
          <div class="font-semibold text-lg flex items-center justify-between lg:text-xl">
            <div>Total:</div>
            <div v-if="!events[activeEvent].status">
              <!-- // text-red-600 //  text-emerald-400 -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block w-6 h-6 text-red-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              <span v-if="!isNaN(totalBayarBeforeTax)">Rp{{ Math.round(totalBayarBeforeTax + tax) }}</span>
              <span class="text-red-600 ml-2">Belum Lunas</span>
            </div>
            <div v-if="events[activeEvent].status">
              <!-- // text-red-600 //  text-emerald-400 -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block w-6 h-6 text-emerald-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <span>Rp{{ Math.round(totalBayarBeforeTax + tax) }}</span>
              <span class="text-emerald-400 ml-2">Lunas</span>
            </div>
          </div>

          <div class="w-full px-4 py-1">
            <p class="text-xs text-secondary lg:text-sm">
              <span class="font-bold">6575100990 (BCA)</span>
              A/N
              <span class="font-bold">Stepanus Imanuel</span>
            </p>
            <p class="pt-2 text-xs text-slate-700 lg:text-sm hidden"><span class="font-medium">Note</span>: Pesan dari admin</p>
          </div>
        </div>
      </div>
      <div class="w-full px-4 mt-10 py-4 bg-slate-100">
        <form action="">
          <div class="w-full px-4 mb-4">
            <label for="protes" class="text-base font-semibold text-primary lg:text-lg">Protes Ketidaksesuaian</label>
            <textarea
              name="protes"
              id="protes"
              class="w-full bg-slate-200 text-secondary text-dark rounded focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32 p-2 placeholder:text-slate-400"
              placeholder="misal: harga tidak sesuai menu"
              v-model="protes"
            ></textarea>
          </div>
          <div class="w-full px-4 my-6">
            <button type="submit" name="kirim-protes" class="text-white font-medium text-xl w-full bg-primary rounded-full inline-block p-2 hover:opacity-90" @click.prevent="kirimProtes()">Kirim</button>
          </div>
        </form>
      </div>

      <div class="w-full px-4 py-10 bg-secondary text-white">
        <h4 class="text-xl font-semibold text-primary">Riwayat Protes</h4>
        <div class="px-4" v-if="events[activeEvent].protes.length <= 0">
          <p>Belum pernah mengajukan protes</p>
        </div>
        <div class="flex flex-wrap px-4" v-if="events[activeEvent] && events[activeEvent].protes.length > 0" v-for="(protes, index) in events[activeEvent].protes" :key="index">
          <div class="my-2" v-if="protes.isUser == 1">
            <p class="w-full">You:</p>
            <p class="font-light">{{ protes.msg }}</p>
          </div>
          <div class="my-2 text-black" v-if="protes.isUser == 0">
            <p class="w-full">Admin:</p>
            <p class="font-light">{{ protes.msg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, computed, reactive } from "vue";
const $e = inject("$e");
const $bus = inject("$bus");
const activeEvent = ref(0);
const protes = ref("");
const carts = ref([]);
const order = ref(["", 1]);

let events = $e.getAllEvents();

$bus.$on("get-updated-events", () => {
  events = [...$e.getAllEvents()];
});

function addKeranjang() {
  if (order.value[0].length <= 0) {
    alert("isi dulu yaa");
    return;
  }
  carts.value.push(order.value);
  order.value = ["", 1];
}

function kirimOrder() {
  if (carts.value.length <= 0) {
    alert("keranjang masih kosong");
    return;
  }
  $e.addUserOrder(activeEvent.value, carts.value);

  $bus.$emit("get-updated-events", order.value);

  window.location.reload();
}

function kirimProtes() {
  if (protes.value.length <= 0) {
    alert("isi dulu yaa");
    return;
  }
  $e.addProtesUser(activeEvent.value, protes.value);
  const randNum = Math.floor(Math.random() * 3) + 1;
  for (let i = 1; i <= randNum; i++) {
    $e.addProtesAdmin(
      activeEvent.value,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Lectus urna duis convallis convallis. Pellentesque nec nam aliquam sem et. Non curabitur gravida arcu ac tortor dignissim convallis"
    );
  }

  $bus.$emit("get-updated-events", protes.value);

  window.location.reload();
}

const totalBayarBeforeTax = computed(() => {
  const pesanan = events[activeEvent.value].pesanan;
  let total = pesanan.reduce((total, p) => (total += parseFloat(p[2])), 0);
  return total;
});

const tax = computed(() => totalBayarBeforeTax.value * 0.1);

const eventLinkClick = (index) => {
  activeEvent.value = index;
};
</script>
