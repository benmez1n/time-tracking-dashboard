const filterList = Array.from(document.querySelectorAll('#track-filter ul li')),
      daily = Array.from(document.querySelectorAll('.daily')),
      weekly = Array.from(document.querySelectorAll('.weekly')),
      monthly = Array.from(document.querySelectorAll('.monthly')),
      images = Array.from(document.querySelectorAll('.info img'));

filterList[0].onclick = ()=>{
    filterList[0].classList.add("active")
    filterList[1].classList.remove('active')
    filterList[2].classList.remove('active')
    daily.forEach(item=>{
        item.classList.remove('inactive')
    })
    monthly.forEach(item=>{
        item.classList.add('inactive')
    })
    weekly.forEach(item=>{
        item.classList.add('inactive')
    })
}

filterList[1].onclick = ()=>{
    filterList[1].classList.add("active")
    filterList[0].classList.remove('active')
    filterList[2].classList.remove('active')
    daily.forEach(item=>{
        item.classList.add('inactive')
    })
    monthly.forEach(item=>{
        item.classList.add('inactive')
    })
    weekly.forEach(item=>{
        item.classList.remove('inactive')
    })
}

filterList[2].onclick = ()=>{
    filterList[2].classList.add("active")
    filterList[0].classList.remove('active')
    filterList[1].classList.remove('active')
    daily.forEach(item=>{
        item.classList.add('inactive')
    })
    monthly.forEach(item=>{
        item.classList.remove('inactive')
    })
    weekly.forEach(item=>{
        item.classList.add('inactive')
    })
}