# Simple Sorting Methods for Date, Number, and Strings - By Logan.


## 1. sortStringArray(arrayOfString)
- Takes one argument of array containing strings
- `["Alphabet", "Car brand A", "Car brand B", "alphabet"]`
- Returns in alphabetical order
- Capital letters will come before lowercase
- e.g. "Arial" will come before "arial"

## 2. sortNumberArray(arrayOfNumbers)
- Takes one argument of array containing numbers
- Returns lowest number first
- `[ 22, 34, 47, 58, 61, 100 ]`

## 3. sortDateArray(arrayOfStringDates)
- Takes Takes one argument, array containing dates
- Date Patterns for string array: "YYYY-MM-DD"
- Returns the earlist date first
- `["YYYY-MM-DD", "YYYY-MM-DD", "YYYY-MM-DD", "YYYY-MM-DD"]`




## Example Outputs

### String Array BEFORE Sorting: 
 `[ 'Alphabet', 'alphabet', 'Car brand A', 'Car brand B' ]`

### String Array AFTER Sorting: 
`[ 'Alphabet', 'Car brand A', 'Car brand B', 'alphabet' ]`


### Number Array BEFORE Sorting:
```
[
  154, 229, 255, 201, 219, 171,  42, 170, 122, 170,  45, 250,
  103,  47,  45,  16, 145, 255, 226, 247,  19, 145,  45, 192,
  239, 245,  99, 221,  36, 151,  88, 186, 250,  22, 140, 250,
  233, 193, 180,  44,  71,  17, 194, 101,  79, 114, 206,  95,
   60, 153, 139,  71,   0,  94,   9, 100,  69, 160, 237,  91,
    5, 173, 229, 128,  49, 255,  27, 168, 187, 235, 233, 126,
   54, 101, 209, 153, 131, 241,  87,  89, 129,  24, 186,  64,
   60, 223, 206,  75,  98,  11, 192, 190,  84, 106, 108, 141,
  201, 147,  54,  73,
  ... 155 more items
]
```

### Number Array AFTER Sorting:
``` 
[
    0,   0,   3,   5,  5,  9,  9,   9,   9,  10,  11,  12,
   15,  16,  16,  17, 17, 19, 20,  20,  20,  22,  23,  24,
   27,  27,  27,  29, 29, 31, 33,  33,  36,  36,  39,  41,
   42,  43,  44,  44, 45, 45, 45,  45,  47,  49,  51,  51,
  ... 155 more items
] 
```


### Date array BEFORE Sorting:
``` 
[ '2000-01-01',
  '2010-10-10',
  '1850-08-26',
  '1066-05-02' ]
```

### Date Array After Sorting

```
[
  1066-05-02T00:00:00.000Z,
  1850-08-26T00:00:00.000Z,
  2000-01-01T00:00:00.000Z,
  2010-10-10T00:00:00.000Z
]
```