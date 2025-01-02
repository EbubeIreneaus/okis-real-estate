import AOS from "aos";

export function AOSInit(){
    AOS.init({
        duration: 1300
    })
}

export function AOSRefresh(){
    AOS.refresh()
  
}