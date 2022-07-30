let btn1 = document.querySelector('button')
let result = document.querySelector('h1')
let users = [
  'Type25',
  'M16',
  'AK117',
  'AK47',
  'ASM10',
  'M4',
  'BK57',
  'LK24',
  'ICR1',
  'Man-O-War',
  'KN44',
  'HBRa3'
]
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
  function attachmentsshuffle () {
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
  }
  switch (weapon) {
    case 'Type25':
      attachments.innerText = 'Type 25 Loadout'
      attachmentsshuffle()
      document.getElementById('loadoutimage').src = 'weaponimages/Type251.jpg'
      break
    case 'M16':
      console.log('M16')
      attachments.innerText = 'M16 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/M16.jpg'
      attachmentsshuffle()
      break
    case 'AK117':
      attachmentsshuffle()
      attachments.innerText = 'AK117 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/AK117.jpg'
      break
    case 'AK47':
      attachmentsshuffle()
      attachments.innerText = 'AK47 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/AK47.jpg'
      break
    case 'ASM10':
      attachmentsshuffle()
      attachments.innerText = 'ASM10 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/ASM10.jpg'
      break
    case 'ASM10':
      attachmentsshuffle()
      attachments.innerText = 'ASM10 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/ASM10.jpg'
      break
    case 'M4':
      attachmentsshuffle()
      attachments.innerText = 'M4 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/M4.jpg'
      break
    case 'BK57':
      attachmentsshuffle()
      attachments.innerText = 'BK57 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/BK57.jpg'
      break
    case 'LK24':
      attachmentsshuffle()
      attachments.innerText = 'LK24 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/LK24.jpg'
      break
    case 'ICR1':
      attachmentsshuffle()
      attachments.innerText = 'ICR1 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/ICR1.jpg'
      break
    case 'Man-O-War':
      attachmentsshuffle()
      attachments.innerText = 'Man-O-War Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/Man-O-War.jpg'
      break
    case 'KN44':
      attachmentsshuffle()
      attachments.innerText = 'KN44 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/KN44.jpg'
      break
    case 'HBRa3':
      attachmentsshuffle()
      attachments.innerText = 'HBRa3 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/HBRa3.jpg'
      break
    case 'HVK-30':
      attachmentsshuffle()
      attachments.innerText = 'HVK-30 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/HVK-30.jpg'
      break
    case 'DR-H':
      attachmentsshuffle()
      attachments.innerText = 'DR-H Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/DR-H.jpg'
      break
    case 'PeacekeeperMK2':
      attachmentsshuffle()
      attachments.innerText = 'PeacekeeperMK2 Loadout'
      document.getElementById('loadoutimage').src =
        'weaponimages/PeacekeeperMK2.jpg'
      break
    case 'FR556':
      attachmentsshuffle()
      attachments.innerText = 'FR556 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/FR556.jpg'
      break
    case 'ASVal':
      attachmentsshuffle()
      attachments.innerText = 'ASVal Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/ASVal.jpg'
      break
    case 'M13':
      attachmentsshuffle()
      attachments.innerText = 'M13 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/M13.jpg'
      break
    case 'Swordfish':
      attachmentsshuffle()
      attachments.innerText = 'Swordfish Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/Swordfish.jpg'
      break
    case 'Kilo141':
      attachmentsshuffle()
      attachments.innerText = 'Kilo141 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/Kilo141.jpg'
      break
  }
})
