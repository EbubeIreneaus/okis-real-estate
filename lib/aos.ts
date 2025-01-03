import AOS from "aos";

export function AOSInit(){
    AOS.init({
        duration: 1300,
        once: true
    })
}

export function AOSRefresh(){
    AOS.refresh()
  
}