/**
 * - 멤버함수 오버라이딩(overriding) : C++에서 파생 클래스는 상속을 받을 때 명시한 접근
  제어 권한에 맞는 기초 클래스의 모든 멤버를 상속받음; 필요한 동작을 위해 재정의하여 사용할
  수 있음; 멤버 함수의 동작만 재정의 하는 것이므로, 함수의 원형은 기존 멤버 함수와 같아야 함
   1 파생 클래스에서 직접 오버라이딩하는 방법
    - 파생 클래스는 상속받은 기초 클래스의 멤버 함수를 직접 재정의할 수 있음
   2 가상 함수를 이용해 오버라이딩하는 방법
*/
// 1
#include <iostream>
using namespace std;

class Person{
    private:
        string name_;
        int age_;
    pubic:
        Person(const string& name, int age); // 기초 클래스 생성자 선언
        void ShowPersonInfo();
};
class Student : public Person{
    private:
        int student_id_;
    public:
        Student(int sid, const string& name, int age); // 파생 클래스 생성자 선언
        void ShowPersonInfo(); // 파생 클래스에서 상속받은 멤버함수 재정의
};

int main(void){
    Person lee("eins",20);
    lee.ShowPersonInfo();
    Student hong(1001,"twei",30);
    hong.ShowPersonInfo();

    return 0;
}

Person::Person(const string& name, int age){ // 기초 클래스 생성자 정의
    name_ = name;
    age_ = age;
}
void Person::ShowPersonInfo(){
    cout<<name_<<"의 나이 : "<<age_<<endl;
}
Student::Student(int sid, const string& name, int age) : Person(name,age){
    // 파생 클래스 생성자 정의
    student_id_ = sid;
}
void Student::ShowPersonInfo(){
    cout<<"이 학생의 학번 : "<<student_id_<<endl;
}
//http://www.tcpschool.com/cpp/cpp_inheritance_overriding