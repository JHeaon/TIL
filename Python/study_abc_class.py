"""
추상 클래스란 구현 내용은 없고 목적만을 가진 클래스이다. 추상 클래스는 상속을 통해 자식 클래스에서 구현되어야 하며,
자식 클래스에서 구현되지 않으면 에러가 발생한다. 추상 클래스는 abc 모듈을 통해 구현할 수 있다.
"""
from abc import *


class Student(metaclass=ABCMeta):
    @abstractmethod
    def study(self):
        pass

    @abstractmethod
    def play(self):
        pass


class KeimyungStudent(Student):
    def study(self):
        print("Study hard")

    def play(self):
        print("Play hard")


class YungnamStudent(Student):
    def study(self):
        print("Study hard")


ks = KeimyungStudent()
ys = YungnamStudent() # TypeError: Can't instantiate abstract class YungnamStudent with abstract method play

ks.study()
ks.play()
ys.study()
# ys.play()  # Error