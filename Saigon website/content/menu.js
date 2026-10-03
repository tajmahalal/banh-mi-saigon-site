/* MENU: every dish on the site. Each line is:
   [number, name, other-name/description, price, ingredients]
   Edit the text between the quotes. Photos are matched by dish NAME (see photos/_FILE-NAMES.txt). */
var BM_BASE="baguette, pickled carrot and daikon, cucumber, cilantro, jalapeno, mayo";
window.SITE_MENU=[
 {id:"banhmi",g:"Banh Mi",sub:"Every sandwich comes on a fresh baguette with pickled carrot and daikon, cucumber and cilantro.",items:[
  ["1","Banh Mi Saigon (Heo Nuong)","BBQ Pork","10.5","Grilled BBQ pork, "+BM_BASE],
  ["2","Banh Mi Ga Nuong","Grilled Chicken","11","Grilled chicken, "+BM_BASE],
  ["3","Banh Mi Tom Nuong","Grilled Shrimp","10.5","Grilled shrimp, "+BM_BASE],
  ["4","Banh Mi Dac Biet","Vietnamese Ham and Pate","11","Vietnamese ham, pork pate, cold cuts, "+BM_BASE],
  ["5","Banh Mi Xiu Mai","Pork Meatball","11","Pork meatballs in tomato sauce, "+BM_BASE],
  ["6","Banh Mi Chay","Vegetarian","10.5","Mushroom, wood ear, baby corn, tofu and seitan, "+BM_BASE],
  ["7","Banh Mi Ga Chay","Vegetarian Chicken","10.5","Seasoned vegetarian chicken, "+BM_BASE],
  ["8","Banh Mi Ca Ri Ga","Curry Chicken","11","Curry chicken, "+BM_BASE],
  ["9","Banh Mi Dau Hu","Tofu","9","Tofu, "+BM_BASE],
  ["10","Banh Mi Thit Xao Xa","Sauteed Pork with Lemongrass and Onion","11","Sauteed pork, lemongrass, onion, "+BM_BASE],
  ["11","Banh Mi Bi","Shredded Pork Skin","10.5","Shredded pork skin, "+BM_BASE],
  ["12","Banh Mi Tom Xao Xa","Sauteed Shrimp with Lemongrass and Onion","11","Sauteed shrimp, lemongrass, onion, "+BM_BASE],
  ["13","Banh Mi Thit Nguoi","Vietnamese Ham, Pork Belly and Cold Cuts","11","Vietnamese ham, pork belly, cold cuts, "+BM_BASE]
 ],note:"Extras: extra meat $2.5 · add pate $1.5 · add egg $2.5 · extra vegetable $2."},
 {id:"rolls",g:"Summer Rolls",sub:"Fresh rice paper rolls with rice vermicelli, lettuce and herbs.",items:[
  ["R1","Goi Cuon","Shrimp Rolls","10.5","Shrimp, rice vermicelli, lettuce, mint, rice paper, peanut hoisin dipping sauce"],
  ["R2","Goi Nem Nuong Cuon","BBQ Pork Rolls","11","BBQ pork, rice vermicelli, lettuce, mint, rice paper, peanut hoisin dipping sauce"],
  ["R3","Goi Bo Nuong Cuon","Grilled Beef Rolls","10.5","Grilled beef, rice vermicelli, lettuce, mint, rice paper, peanut hoisin dipping sauce"],
  ["R4","Bi Cuon","Shredded Pork Skin Rolls","11","Shredded pork skin, rice vermicelli, lettuce, mint, rice paper, dipping sauce"],
  ["R5","Goi Cuon Chay","Tofu Rolls","10.5","Tofu, rice vermicelli, lettuce, mint, rice paper, peanut hoisin dipping sauce"]
 ]},
 {id:"vermicelli",g:"Vermicelli",sub:"Rice vermicelli bowls with lettuce, herbs, pickles, peanuts and nuoc cham.",items:[
  ["V1","Bun Nem Nuong","BBQ Pork","13","BBQ pork, rice vermicelli, lettuce, cucumber, pickled carrot and daikon, mint, crushed peanuts, nuoc cham"],
  ["V2","Bun Ga Nuong","Grilled Chicken","13.5","Grilled chicken, rice vermicelli, lettuce, cucumber, pickled carrot and daikon, mint, crushed peanuts, nuoc cham"],
  ["V3","Bun Bo Xao Xa","Sauteed Beef with Lemongrass and Onion","14","Sauteed beef, lemongrass, onion, rice vermicelli, lettuce, cucumber, pickles, peanuts, nuoc cham"],
  ["V4","Bun Bi","Shredded Pork Skin","14","Shredded pork skin, rice vermicelli, lettuce, cucumber, pickles, mint, peanuts, nuoc cham"],
  ["V5","Bun Thit Xao Xa","Sauteed Pork with Lemongrass and Onion","13","Sauteed pork, lemongrass, onion, rice vermicelli, lettuce, cucumber, pickles, peanuts, nuoc cham"],
  ["V6","Bun Tom Xao Xa","Sauteed Shrimp with Lemongrass and Onion","14","Sauteed shrimp, lemongrass, onion, rice vermicelli, lettuce, cucumber, pickles, peanuts, nuoc cham"],
  ["V7","Bun Chay","Vegetarian","13.5","Mushroom, wood ear, baby corn, tofu and seitan, rice vermicelli, lettuce, cucumber, pickles, peanuts"]
 ]},
 {id:"rice",g:"Rice Noodle",sub:"Steamed rice noodle sheets.",items:[
  ["C1","Banh Uot Cha Lua","Vietnamese Ham with Steamed Rice Noodle","10.5","Vietnamese ham, steamed rice noodle sheets, fried shallots, nuoc cham"],
  ["C2","Banh Uot Ga","Grilled Chicken Steamed Rice Noodle","11","Grilled chicken, steamed rice noodle sheets, fried shallots, nuoc cham"]
 ]},
 {id:"soup",g:"Soup",sub:"",items:[
  ["","Hot and Sour Soup","Large $5.5 · Small $4.5","4.5","Tangy broth with tomato, pineapple, herbs and tofu"]
 ],pricePrefix:"from $"},
 {id:"drinks",g:"Drinks",sub:"",drinks:true,hot:[
  ["Coffee","越南咖啡","1.75","2.5"],["Milk Tea","奶茶","1.75","2.5"],["Salted Lemon","咸檸檬","1.75","2.5"]
 ],cold:[
  ["Vietnamese Coffee","越南咖啡","4.5"],["Milk Tea","奶茶","4.5"],["Thai Ice Tea","泰式奶茶","5"],["Sugar Cane Carrot Juice","竹蔗茅根茶","3"],
  ["Herbal Tea (Prunella)","夏枯草","3"],["Chrysanthemum Tea","菊花茶","3"],["Plum Tea","酸梅茶","3"],["Winter Melon Tea","冬瓜茶","3"],
  ["Longan Berry Ice","龍眼冰","6"],["Sweet Basil Seed","明珠","5.5"],["Grass Jelly","涼粉","4.5"],["Salted Lemon Soda","咸檸檬蘇打水","4.75"],["Ching Po Leung","清補涼","7.25"]
 ]},
 {id:"desserts",g:"Homemade Desserts",sub:"",items:[
  ["","Che Dau Trang","Black Eye Bean with Coconut Milk","3.5","Black eye beans, coconut milk, sugar"],
  ["","Xoi Nep Than","Black Glutinous Rice","3.5","Black glutinous rice, coconut milk, sugar"],
  ["","Che Bap","Sweet Corn with Coconut Milk","3.5","Sweet corn, coconut milk, sugar"],
  ["","Che Mon","Sweet Porridge with Taro Dessert","3.5","Taro, sugar, coconut milk"],
  ["","Che Chuoi","Banana with Coconut Milk","3.5","Banana, tapioca, coconut milk, sugar"],
  ["","Banh Flan","Flan","3","Egg custard, caramel"],
  ["","Banh Flan La Dua","Pandan Flan","3","Egg custard, pandan, caramel"],
  ["","Banh Bo Nuong","Pandan Honeycomb Cake","7","Tapioca, coconut milk, pandan, eggs, sugar"],
  ["","Banh Da Lon","Pandan Mung Bean Layer Cake","3.75","Mung bean, pandan, coconut milk, tapioca. Small $3.75 · Large $8"]
 ]}
];
window.SITE_PICKS=[["Banh Mi Saigon (Heo Nuong)","BBQ pork on a fresh baguette"],["Goi Cuon","Shrimp summer rolls"],["Vietnamese Coffee","Iced, strong and sweet"]];
