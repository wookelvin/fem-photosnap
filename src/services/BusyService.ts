import { ref } from "vue";

const busy = ref(true);

function updateBusy(b: boolean) { 
  console.log('updating busy', b);
  if (b){ 
    busy.value = b;
  }else{ 
    setTimeout(() => { 
      busy.value = b;
    }, 1000);
  }
  
};

export default function() { 
  return {
    busy, 
    updateBusy
  }
}
