# print("hello python")

class Player:
    def __init__(self, name,health,skill):
        self.name = name
        self.health = health
        self.skill = skill
        self.xp = 0
    def sayHello(self):
        return f'Hi, my name is ${self.name} and my skill is ${self.skill}'
    def takeHit(self):
        self.health = self.health - 5

bill = Player("Bill Gates",85,"Programmer")
elon = Player("Elon Musk",90,"Legend")
warren = Player("Warren Buffet",100,"Investor")

print(warren.health)
print(bill.sayHello())