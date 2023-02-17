'''
my_age
"1234"
True
False
'''

def say_hi():
    print("hi")
say_hi()

def say_hello(user_name):
    print("hello ",user_name,"how r u")
say_hello("Lee")

def hello(user_name="anonymous"):
    print(user_name)
hello() # anonymous
hello("lee")

def tax_calc(money):
    return money * 0.35
    print(money) # return 이후의 값은 수행X
def pay_tax(tax):
    print("tax : ",tax)
to_pay = tax_calc(100000)
pay_tax(to_pay)

my_name = "Lee"
my_age = 20
my_eyes_color = "brown"
print(f"Hello I'm {my_name}, I have {my_age} years in the earth, {my_eyes_color} is my eyes color")
# 변수를 포함한 String

"""
if condition:
    "write the code to run"
elif condition2:

else :

"""
'''
age >= 18 and age <=35
age == 60 or age == 70
'''

#age = input("years")
#print("age is ",age)
#print(type(age)) # <class 'str'>
#name = int(input("names"))
#print(type(name)) # <class 'int'>

#randint(a,b)
#a <= N <= b
from random import randint
pc_choice = randint(1,50)
print(pc_choice)

#while True: # 무한반복
#    print("Hi i'm True")

u_distance = 0
while u_distance < 5:
    print("running",u_distance,"km")
    u_distance += 1

'''
playing = True
while playing:
    u_choice = int(input())
    if u_choice == pc_choice:
        print(u_choice)
        playing = False # 이겼을 때 멈춤
while playing or stop:
             and
'''

# method
time = "times"
print(time.upper()) # TIMES
print(time.capitalize()) # Times
print(time.startswith("t")) # True
print(time.replace("e","★")) #tim★s
fruit = "Banana"
print("B".isupper()) # True
print("b".isupper()) # False
print(" ".isupper()) # False
print("Banana".isupper()) # False

# list
days_of_week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
print(days_of_week[-1]) # Sun : 마지막 아이템
print(days_of_week.count("Wed")) # 1
print(days_of_week.reverse())
print(days_of_week) # ['Sun', 'Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon']
print(days_of_week.append("days"))
print(days_of_week) # ['Sun', 'Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'days']
print(days_of_week.remove("Fri"))
print(days_of_week[3]) # Wed
lists = [1,2,3,True,"hi",[1,2,3,[True]]]
print(days_of_week.clear()) # None
print(days_of_week) # []
print(lists) # [1, 2, 3, True, 'hi', [1, 2, 3, [True]]]

# tuple : 내용을 변경하지 못함(불변성)
days = ("Mon","Tue","Wed")
print(days[0]) # Mon
print(days[-1]) # Wed
print(days[-2]) # Tue
# tuple, list 만들 때 이름을 복수형으로 씀 ex. websites, lists, users

# dictionary # { 키 : 값 } # 내용을 바꿀 수 있음(mutable)
player={ "name":"Lee", "age":20, "alive":True, "fav_food":["피자","버거"] }
player.get("age")
player.get('name')
player['fav_food']
player["name"]
player.pop('age') # pop은 key 지우는 것
# 데이터 추가
player['xp'] = 1500
player['fav_food'].append("국수")
print(player.get('fav_food')) # ['피자', '버거', '국수']
print(player["fav_food"]) # = print(player.get('fav_food')) 결과 같음
users = {
    "name": "peter",
    "age": 22,
    "alive": True,
    "fav_food": ("초밥", "체리"),
    "friend": {"name": "parker", "age": 15, "fav_food": ["딸기"]},
}
#print(users["friend"]["fav_food"])  # ['딸기']
users["fav_food"] = "키위"
users.pop("alive")
users["friend"]["fav_food"].append("케익")
print(users)

alphabets=("A", "B", "C")
for each in alphabets:
    print("hello") # websites's item 개수만큼 출력
for photo in alphabets:
    print("photo is equal to ",photo)
for alpha in alphabets:
    print("website is ",alpha)
    print(alpha)

# URL Formatting : 'http' or 'https://' 붙인 웹사이트 주소로 이동 가능
# 웹사이트 주소가 https로 시작하면 바로 이동
# 그렇지 않다면 앞에 https를 붙여줘야 함
websites = ("google.com","https://naver.com","youtube.com","https://kakaocorp.com")
for website in websites: # website 변수는 각 사이클에서 list 안의 item으로 바뀜
    if website.startswith("https://"):
        print("good to go")
    elif not website.startswith("https://"):
    # "elif website.startswith("https://")==False:"
        website = f"https://{website}"
        print(website)
    else:
        print("we have to fix it")
    # if문은 True/False 판단, startswith는 Boolean값 
    