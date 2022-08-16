let names = ["Saladin", "Senadin", "Kenan"];

// access O(1) data (index) je constant tj. o(1), JavaScript odmah daje rezultat i ne traži element u array-u
// Insertion zavisi od toga gdje se ubacuje element:
// insert na kraju - O(1) jer samo ubaci element u array
// insert na početku - O(n) jer mora da svim elementima ponovo da novi index jer je novi element zauzeo index 0
// Remove na kraju - O(1)
// Remove na početku - O(n)
// Searching - O(n) jer za svaki index pregleda da li je to taj value, slično kao i za Object values

names.unshift("Jusuf"); //dodaje Jusuf na početku array-a
names.shift(); //remova Jusuf sa početka array-a

//push - O(1)
//pop - O(1)
//unshift - O(n)
//shift - O(n)
//concat - O(n) --> uzima više array-s i spaja ih u jedan

//slice - O(n) --> raste u skladu sa koliko elemenata iz array-a želimo da kopiramo 
//slice --------> daje kopiju od dijela Arrayy-a slice(1,4) 1 briše prvi element (index 0) a 4 briše sve poslije 4tog elementa (index 3)

//splice - O(n) --> splice(1,0, "Feb") na index 1 dodaje element Feb, splice(4,1, "May") na index 4 mijenja 1 element sa May
//splice --------> splice(2,1) na index 2 briše jedan element

//sort - O(N*logN) ---> vrijeme je veće nego O(n)
//forEach/map/filter/reduce/etc. - O(n)

//flat() -------> od nested arrays napravi jedan array sa svim values (1 lvl deep)
//flat(3) -------> 3 levela dubine izvadi podatke //// umjesto 3 može biti bilo koji broj
