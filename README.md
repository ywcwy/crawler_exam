# crawler_exam
design and create a CLI application that will parser www.alexa.com data
## Environment
* Node.js

## Packages
* axios
* dotenv
* yargs

## Install (for Mac OS user)
### 1. Open Terminal

### 2. Project Download
```
$git clone https://github.com/ywcwy/crawler_exam.git
```
After download, 
```
$cd crawler_exam 
```
### 3. npm Installation
```
$npm init -y    
```
### 4. Package Installation
```
$npm install     
```
### 6. Project Implement
```
$crawl country --countryCode <countryCode>   // countryCode 放入國家代碼，如 US, TW, JP...，以取得某國的前 20 名URL
$crawl top --number <number>  // number 放入數量，以取得全世界前五名 URL
```
