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
  'HBRa3',
  'HVK-30',
  'DR-H',
  'PeacekeeperMK2',
  'FR556',
  'ASVal',
  'M13',
  'Swordfish',
  'Kilo141'
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
  //document.getElementById('generateloadout').style.display = 'none'

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

  switch (weapon) {
    case 'Type25':
      attachments.innerText = 'Type 25 Loadout'
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
      document.getElementById('loadoutimage').src = 'weaponimages/Type251.jpg'
      break
    case 'M16':
      //M16 Attachments
      let m16barrel = [
        'OWC Marksman',
        'MIP Light Barrel(Short)',
        'YKM Integral Suppressor Light'
      ]
      let m16stock = [
        'No stock',
        'YKM Light Stock',
        'YKM Combat Stock',
        'MIP Strike Stock'
      ]
      let m16ammo = ['39 Round Extended Mag', '48 Round Extended Mag']

      console.log('M16')
      attachments.innerText = 'M16 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/M16.jpg'
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
          shuffledbarrel = shuffle(m16barrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(m16stock)
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
          shuffledammo = shuffle(m16ammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      break
    case 'AK117':
      //AK117 Attachments
      let ak117barrel = [
        'MIP Light Barrel(Short)',
        'MIP Extended Light Barrel',
        'OWC Marksman',
        'YKM Integral Suppressor'
      ]
      let ak117stock = [
        'No stock',
        'OWC Skeleton Stock',
        'YKM Light Stock',
        'RTC Steady Stock'
      ]
      let ak117ammo = ['48 Round Extended Mag', '40 Round Extended Mag']
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(ak117barrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(ak117stock)
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
          shuffledammo = shuffle(ak117ammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'AK117 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/AK117.jpg'
      break
    case 'AK47':
      //AK47
      let ak47barrel = [
        'MIP Light Barrel(Short)',
        'GRU Combo Grip',
        'MIP Extended Light Barrel',
        'OWC Ranger',
        'OWC Marksman'
      ]
      let ak47stock = [
        'OWC Skeleton Stock',
        'MIP Strike Stock',
        'No Stock',
        'YKM Light Stock',
        'YKM Combat Stock'
      ]
      let ak47ammo = [
        'Large Extended Mag B',
        'Extended Mag A',
        '5.45 Caliber Ammo'
      ]

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(ak47barrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(ak47stock)
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
          shuffledammo = shuffle(ak47ammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'AK47 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/AK47.jpg'
      break
    case 'ASM10':
      //ASM 10 Attachments
      let asmbarrel = ['OWC Marksman', 'MIP Light Barrel Short', 'OWC Ranger']
      let asmstock = [
        'No stock',
        'MIP Strike Stock',
        'YKM Stock',
        'YKM Combat Stock'
      ]
      let asmammo = ['33 Round Extended Mag', '40 Round Extended Mag']
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(asmbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(asmstock)
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
          shuffledammo = shuffle(asmammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'ASM10 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/ASM10.jpg'
      break
    // case 'ASM10':
    //   for (let i = 0; i < 5; i++) {
    //     console.log(shuffledattachments[i])
    //     if (shuffledattachments[i] == 'Muzzle') {
    //       document.getElementById('muzzle').style.display = 'block'

    //       shuffledmuzzle = shuffle(muzzleattach)
    //       document.getElementById('muzzle').innerText = shuffledmuzzle[0]
    //     }
    //     if (shuffledattachments[i] == 'Barrel') {
    //       document.getElementById('barrel').style.display = 'block'
    //       shuffledbarrel = shuffle(asmbarrel)
    //       document.getElementById('barrel').innerText = shuffledbarrel[0]
    //     }
    //     if (shuffledattachments[i] == 'Optic') {
    //       document.getElementById('optic').style.display = 'block'
    //       shuffledoptic = shuffle(optic)
    //       document.getElementById('optic').innerText = shuffledoptic[0]
    //     }
    //     if (shuffledattachments[i] == 'Stock') {
    //       document.getElementById('stock').style.display = 'block'
    //       shuffledstock = shuffle(asmstock)
    //       document.getElementById('stock').innerText = shuffledstock[0]
    //     }
    //     if (shuffledattachments[i] == 'Perk') {
    //       document.getElementById('perks').style.display = 'block'
    //       shuffledperks = shuffle(perks)
    //       document.getElementById('perks').innerText = shuffledperks[0]
    //     }
    //     if (shuffledattachments[i] == 'Laser') {
    //       document.getElementById('laser').style.display = 'block'
    //       shuffledlaser = shuffle(laser)
    //       document.getElementById('laser').innerText = shuffledlaser[0]
    //     }
    //     if (shuffledattachments[i] == 'Underbarrel') {
    //       document.getElementById('underbarrel').style.display = 'block'
    //       shuffledunderbarrel = shuffle(underbarrel)
    //       document.getElementById('underbarrel').innerText =
    //         shuffledunderbarrel[0]
    //     }
    //     if (shuffledattachments[i] == 'Rear Grip') {
    //       document.getElementById('reargrip').style.display = 'block'
    //       shuffledreargrip = shuffle(reargrip)
    //       document.getElementById('reargrip').innerText = shuffledreargrip[0]
    //     }
    //     if (shuffledattachments[i] == 'Ammunition') {
    //       document.getElementById('ammunition').style.display = 'block'
    //       shuffledammo = shuffle(asmammo)
    //       document.getElementById('ammunition').innerText = shuffledammo[0]
    //     }
    //   }
    //   attachments.innerText = 'ASM10 Loadout'
    //   document.getElementById('loadoutimage').src = 'weaponimages/ASM10.jpg'
    //   break
    case 'M4':
      //M4 Attachments
      let m4barrel = [
        'MIP Light',
        'MIP Light Barrel(Short)',
        'OWC Ranger',
        'OWC Marksman',
        'YKM Integral Suppressor Light'
      ]
      let m4ammo = ['40 Round Extended Mag', '50 Round Extended Mag']
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(m4barrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(asmstock)
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
          shuffledammo = shuffle(m4ammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'M4 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/M4.jpg'
      break
    case 'BK57':
      let bk57barrel = [
        'MIP Extended Light Barrel',
        'MIP Light Barrel(Short)',
        'OWC Ranger'
      ]
      let bk57stock = [
        'YKM Light Stock',
        'YKM Combat Stock',
        'OWC Skeleton Stock'
      ]
      let bk57ammo = [
        '50 Round Extended Mag',
        '40 Round Extended Mag',
        '7.62 40 Round Reload'
      ]
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(bk57barrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(bk57stock)
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
          shuffledammo = shuffle(bk57ammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'BK57 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/BK57.jpg'
      break
    case 'LK24':
      let lkbarrel = [
        'OWC Marksman',
        'OWC Ranger',
        'YKM Integral Suppressor Light'
      ]
      let lkstock = [
        'No Stock',
        'YKM Light Stock',
        'YKM Combat Stock',
        'MIP Strike Stock'
      ]
      let lkammo = ['40 Round Extended Mag', '50 Round Extended Mag']
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(lkbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(lkstock)
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
          shuffledammo = shuffle(lkammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'LK24 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/LK24.jpg'
      break
    case 'ICR1':
      let icrbarrel = [
        'OWC Ranger',
        'OWC Marksman',
        'YKM Integral Suppressor Light'
      ]
      let icrstock = [
        'No Stock',
        'YKM Light Stock',
        'YKM Combat Stock',
        'MIP Steady Stock'
      ]
      let icrammo = [
        '40 Round Extended Mag',
        '40 Round Fast Reload',
        '50 Round Fast Reload'
      ]
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(icrbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(icrstock)
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
          shuffledammo = shuffle(icrammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'ICR1 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/ICR1.jpg'
      break
    case 'Man-O-War':
      let manmuzzle = [
        'Monolithic Suppressor',
        'Colossus Suppressor',
        'Tactical Suppressor',
        'OWC Light Suppressor',
        'OWC Light Compensator',
        'MIP Light Flash Guard',
        'RTC Light Muzzle Brake'
      ]
      let manbarrel = ['OWC Marksman', 'MIP Light Barrel Short', 'OWC Ranger']
      let manstock = ['MIP Strike Stock', 'YKM Light Stock', 'YKM Combat Stock']
      let manammo = ['35 Round Extended Mag', '30 Round Extended Mag']
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(manmuzzle)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(manbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(manstock)
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
          shuffledammo = shuffle(manammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'Man-O-War Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/Man-O-War.jpg'
      break
    case 'KN44':
      let knbarrel = ['MIP Light Barrel(Short)', 'OWC Ranger', 'OWC Marksman']
      let knstock = [
        'No stock',
        'MIP Strike Stock',
        'YKM Light Stock',
        'YKM Combat Stock'
      ]
      let knammo = ['38 Round Fast Reload', '44 Round Extended Mag']

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(knbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(knstock)
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
          shuffledammo = shuffle(knammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'KN44 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/KN44.jpg'
      break
    case 'HBRa3':
      let hbrbarrel = ['MIP Light', 'OWC Ranger', 'OWC Marksman']
      let hbrstock = [
        'No Stock',
        ' YKM Light Stock',
        'OWC Skeleton Stock',
        'RTC Steady Stock',
        'Thunderbolt Sling'
      ]
      let hbrammo = ['44 Round Extended Mag', 'Fast Extended Mag']
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(hbrbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(hbrstock)
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
          shuffledammo = shuffle(hbrammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'HBRa3 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/HBRa3.jpg'
      break
    case 'HVK-30':
      let hvkbarrel = [
        'MIP Light',
        'OWC Marksman',
        'YKM Integral Suppressor Heavy'
      ]
      let hvkstock = ['YKM Light Stock', 'YKM Combat Stock', 'MIP Strike Stock']
      let hvkammo = [
        'Fast Reload',
        '44 Round Extended Mag',
        'Large Caliber Mag'
      ]
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(hvkbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(hvkstock)
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
          shuffledammo = shuffle(hvkammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'HVK-30 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/HVK-30.jpg'
      break
    case 'DR-H':
      let drhbarrel = ['OWC Marksman', 'MIP Light', 'OWC Ranger']
      let drhstock = [
        'No stock',
        'YKM Light Stock',
        'YKM Combat Stock',
        'MIP Strike Stock'
      ]
      let drhammo = [
        '25 Round OTM Mag',
        '30 Round Extended Mag',
        '38 Round Extended Mag',
        '30 Round OTM Mag'
      ]

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(drhbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(drhstock)
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
          shuffledammo = shuffle(drhammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'DR-H Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/DR-H.jpg'
      break
    case 'PeacekeeperMK2':
      let pcmuzzle = [
        'OWC Light Suppressor',
        'Agency Suppressor',
        'Infantry Compensator',
        'MIP Flashguard',
        'OWC Eliminator',
        'RTC Muzzle Brake'
      ]
      let pcbarrel = [
        'Taskforce Barrel',
        'Rapid Fire Barrel',
        'Well-Forged Barrel',
        'Long Range Barrel',
        'Built-In Silence Barrel'
      ]
      let pcstock = [
        'Agile Stock',
        'No stock',
        'Light Weight Stock',
        'Marathon Stock'
      ]
      let pcgrip = ['Firm Grip Tape', 'Rustle Grip Tape', 'Sturdy Grip Tape']
      let pcammo = ['Double Stack Mag', 'Extended Mag A']
      let pcunderbarrel = [
        'Tactical Foregrip A',
        'RTC Speed Foregrip',
        'Infiltrator Foregrip',
        'Foregrip',
        'Patrol Foregrip'
      ]
      let pclazer = [
        '1mW Steady Aim Laser',
        '5mW Combat Laser',
        'Aim Assist Laser'
      ]

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(pcmuzzle)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(pcbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(pcstock)
          document.getElementById('stock').innerText = shuffledstock[0]
        }
        if (shuffledattachments[i] == 'Perk') {
          document.getElementById('perks').style.display = 'block'
          shuffledperks = shuffle(perks)
          document.getElementById('perks').innerText = shuffledperks[0]
        }
        if (shuffledattachments[i] == 'Laser') {
          document.getElementById('laser').style.display = 'block'
          shuffledlaser = shuffle(pclazer)
          document.getElementById('laser').innerText = shuffledlaser[0]
        }
        if (shuffledattachments[i] == 'Underbarrel') {
          document.getElementById('underbarrel').style.display = 'block'
          shuffledunderbarrel = shuffle(pcunderbarrel)
          document.getElementById('underbarrel').innerText =
            shuffledunderbarrel[0]
        }
        if (shuffledattachments[i] == 'Rear Grip') {
          document.getElementById('reargrip').style.display = 'block'
          shuffledreargrip = shuffle(pcgrip)
          document.getElementById('reargrip').innerText = shuffledreargrip[0]
        }
        if (shuffledattachments[i] == 'Ammunition') {
          document.getElementById('ammunition').style.display = 'block'
          shuffledammo = shuffle(pcammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'PeacekeeperMK2 Loadout'
      document.getElementById('loadoutimage').src =
        'weaponimages/PeacekeeperMK2.jpg'
      break
    case 'FR556':
      let frbarrel = [
        'MIP Extended Light Barrel',
        'MIP Light Barrel(Short)',
        'OWC Ranger'
      ]
      let frstock = ['YKM Light Stock', 'YKM Combat Stock', 'RTC Steady Stock']
      let frammo = ['Extended Mag A', 'Fast Reload']
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(frbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(frstock)
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
          shuffledammo = shuffle(frammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'FR556 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/FR556.jpg'
      break
    case 'ASVal':
      let asvbarrel = [
        'MIP 200mm Mid-Range Barrel',
        'MIP 105mm Melee Barrel',
        'MIP Quick Response Barrel'
      ]
      let asvstock = [
        'OWC Skeleton Stock',
        'YKM Combat Stock',
        'RTC Steady Stock',
        'OWC RAnger Stock'
      ]
      let asvammo = ['Large Extended Mag B', 'Fast Reload', '15 Round FMJ']

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])

        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(asvbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(asmstock)
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
          shuffledammo = shuffle(asvammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'ASVal Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/ASVal.jpg'
      break
    case 'M13':
      let m13barrel = [
        'RTC Silencer Barrel',
        'RTC Mini Barrel',
        'RTC heavy Long Barrel'
      ]
      let m13stock = [
        'RTC Combat Stock',
        'No Stock',
        'M13 Skeleton Stock',
        'RTC Assault Stock'
      ]
      let m13ammo = [
        'Large Extended Mag B',
        'Extended Mag A',
        '.300 30 Round Reload',
        '.300 RTC Double Stack 40 Round'
      ]
      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(m13barrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(m13stock)
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
          shuffledammo = shuffle(m13ammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'M13 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/M13.jpg'
      break
    case 'Swordfish':
      let swbarrel = ['MIP Light', 'MIP Extended Light Barrel', 'OWC Ranger']
      let swstock = [
        'YKM Light Stock',
        'OWC Skeleton Stock',
        'RTC Steady Stock'
      ]
      let swammo = ['Extended Mag A', 'Fast Reload', 'Halberd Mag']

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(swbarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(swstock)
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
          shuffledammo = shuffle(swammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'Swordfish Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/Swordfish.jpg'
      break
    case 'Kilo141':
      let kilobarrel = [
        'MIP Extended Light Barrel',
        'OWC Marksman',
        'YKM Integral Suppressor Light'
      ]
      let kilostock = [
        'No Stock',
        'OWC Skeleton Stock',
        'YKM Combat Stock',
        'RTC Steady Stock'
      ]
      let kiloammo = [
        'Extended Mag A',
        'Large Extendede Mag B',
        '100 Round Reload'
      ]

      for (let i = 0; i < 5; i++) {
        console.log(shuffledattachments[i])
        if (shuffledattachments[i] == 'Muzzle') {
          document.getElementById('muzzle').style.display = 'block'

          shuffledmuzzle = shuffle(muzzleattach)
          document.getElementById('muzzle').innerText = shuffledmuzzle[0]
        }
        if (shuffledattachments[i] == 'Barrel') {
          document.getElementById('barrel').style.display = 'block'
          shuffledbarrel = shuffle(kilobarrel)
          document.getElementById('barrel').innerText = shuffledbarrel[0]
        }
        if (shuffledattachments[i] == 'Optic') {
          document.getElementById('optic').style.display = 'block'
          shuffledoptic = shuffle(optic)
          document.getElementById('optic').innerText = shuffledoptic[0]
        }
        if (shuffledattachments[i] == 'Stock') {
          document.getElementById('stock').style.display = 'block'
          shuffledstock = shuffle(kilostock)
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
          shuffledammo = shuffle(kiloammo)
          document.getElementById('ammunition').innerText = shuffledammo[0]
        }
      }
      attachments.innerText = 'Kilo141 Loadout'
      document.getElementById('loadoutimage').src = 'weaponimages/Kilo141.jpg'
      break
  }
})
