let btn1 = document.querySelector('button')
let result = document.querySelector('h1')
let users = ['Type25']
var attachment = [
  'Muzzle',
  'Barrel',
  'Optic',
  'Stock',
  'Perk',
  'Laser',
  'Underbarrel',
  'Ammunition',
  'Rear Grip'
]

let attachments = document.querySelector('p')
//var arrayRemoveIndex = require('./lib/array_remove_index')

function getRandomNumber (min, max) {
  let step1 = max - min + 1
  let step2 = Math.random() * step1
  let result = Math.floor(step2) + min

  return result
}
function remove_array_value (array, value) {
  var index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    reindex_array(array)
  }
}
function reindex_array (array) {
  var result = []
  for (var key in array) {
    result.push(array[key])
  }
  return result
}
function shuffle (array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

btn1.addEventListener('click', () => {
  document.getElementById('muzzle').innerText = ''
  document.getElementById('barrel').innerText = ''
  document.getElementById('optic').innerText = ''
  document.getElementById('stock').innerText = ''
  document.getElementById('perks').innerText = ''
  document.getElementById('laser').innerText = ''
  document.getElementById('underbarrel').innerText = ''
  document.getElementById('reargrip').innerText = ''
  document.getElementById('ammunition').innerText = ''

  document.getElementById('attachment').style.display = 'block'
  let index = getRandomNumber(0, users.length - 1)
  let weapon = (result.innerText = users[index])

  switch (weapon) {
    case 'Type25':
      let muzzleattach = [
        'Monolithic Suppressor',
        'Tactical Suppressor',
        'OWC Light Suppressor',
        'OWC Light Compensator',
        'MIP Light Flash Guard',
        'RTC Light Muzzle Brake'
      ]

      let barrelattach = [
        'MIP Light',
        'MIP Light Barrel(Short)',
        'MIP Extended Light Barrel'
      ]
      let optic = [
        'Classic Red Dot',
        'Red Dot Sight 1',
        'Red Dot Sight 2',
        'Red Dot Sight 3',
        'Red Dot Sight 4',
        'Red Dot Sight 5',
        'Red Dot Sight 6',
        'Classic Holographic Sight 1',
        'Classic Holographic Sight 2',
        'Classic Holographic Sight 3',
        'Tactical Scope',
        '3X Tactical Scope 1',
        '3X Tactical Scope 2',
        '3X Tactical Scope 1',
        'OWC 4.4X Tactical Scope',
        'RTC 4.4X Tactical Scope'
      ]
      let stock = ['YKM Light Stock', 'YKM Combat Stock', 'RTC Steady Stock']
      let perks = [
        'FMJ',
        'Sleight of hand',
        'Wounding',
        'Full Ammo',
        'Disable',
        'Tough',
        'Long Shot',
        'Melee Master'
      ]
      let laser = ['RTC Laser 1mW', 'MIP Laser 5mW', 'OWC Laser - Tactical']
      let underbarrel = [
        'Strike Foregrip',
        'Merc Foregrip',
        'Operator Foregrip',
        'Ranger Foregrip',
        'Tactical Foregrip A'
      ]
      let reargrip = [
        'Granulated Grip Tape',
        'Rubberrized Grip Tape',
        'Stipped Grip Tape'
      ]
      let ammunition = [
        '38 Round Extended Mag',
        '46 Round Extended Mag',
        'Fast Reload',
        '42 Round Fast Reload',
        'Stopping Power Reload'
      ]
      shuffledattachments = shuffle(attachment)

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(barrelattach)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(stock)
          document.getElementById('stock').innerText = shuffledstock[0]
        }
        if (shuffledattachments[i] == 'Perk') {
          document.getElementById('perks').style.display = 'block'
          shuffledperks = shuffle(perks)
          document.getElementById('perks').innerText = shuffledperks[0]
        }
        if (shuffledattachments[i] == 'Laser') {
          document.getElementById('laser').style.display = 'block'
          shuffledlaser = shuffle(laser)
          document.getElementById('laser').innerText = shuffledlaser[0]
        }
        if (shuffledattachments[i] == 'Underbarrel') {
          document.getElementById('underbarrel').style.display = 'block'
          shuffledunderbarrel = shuffle(underbarrel)
          document.getElementById('underbarrel').innerText =
            shuffledunderbarrel[0]
        }
        if (shuffledattachments[i] == 'Rear Grip') {
          document.getElementById('reargrip').style.display = 'block'
          shuffledreargrip = shuffle(reargrip)
          document.getElementById('reargrip').innerText = shuffledreargrip[0]
        }
        if (shuffledattachments[i] == 'Ammunition') {
          document.getElementById('ammunition').style.display = 'block'
          shuffledammo = shuffle(ammunition)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      console.log(shuffledattachments)
      attachments.innerText = 'Type 25 Loadout'

      document.getElementById('loadoutimage').src = 'weaponimages/Type251.jpg'

      //let attachment = arrayRemoveIndex(attachments, arr.indexOf(textt1))

      break
    case 'Peacekeeper':
      console.log('Peacekeeper')
      attachments.innerText = 'Peacekeeper Loadout'
      document.getElementById('loadoutimage').src = 'HBRa3.jpg'

      break
    case 'M16':
      console.log('M16')
      attachments.innerText = 'M16 Loadout'

      break
  }
})
