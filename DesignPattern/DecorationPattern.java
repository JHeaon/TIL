// 카페 운영을 위해 시스템을 구축하려고 한다. 카페에서는 커피를 주문할 수 있으며, 커피에는 여러 가지 첨가물을 추가할 수 있다.
// 해당 코드는 첨가물의 가격이 바뀔 때마다 기존 코드의 수정을 하여야 하며, 첨가물의 종류가 증가함에 따라 새로운 메소드를 추가해주어야 하며 슈퍼클래스에 있는 cost메소드를 계속 고쳐주어야 한다.

public class Beverage {

	// 변수 메소드

	public int cost() {

		int totCost = 0;

		if (hasMilk())
			totCost += milkCost;

		if (hasSoy())
			totCost += soyCost;

		if (hasMocah())
			totCost += mocahCost;

		if (hasWhip())
			totCost += whipCost;

		return totCost;

	}

}

public class DarkRoast extends Beverage {

	@Override

	public int cost() {

		return 4500 + super.cost();

	}

}


// 해당 문제를 해결하기 위해 데코레이션 패턴을 사용한다.
// 아래는 데코레이션 패턴을 사용한 코드이다.

public abstract class Beverage {
	String description = "제목 없음";

	public String getDescription() {
		return description;
	}

	public abstract double cost();
}


// 첨가물
public abstract class CondimentDecorator extends Beverage { 
	Beverage beverage;

	public abstract String getDescription();
}

// 커피
public class Espresso extends Beverage {
	
	public Espresso() {
		description = "에스프레소";
	}
	
	public double cost() {
		return 1.99;
	}

}

// 모카 첨가물
public class Mocha extends CondimentDecorator {
	
	// 인스턴스 변수를 감싸고자 하는 객체를 받음
	public Mocha(Beverage beverage) {
		// 감싸고자 하는 음료를 저장하는 인스턴스 변수
		this.beverage = beverage; 
	}

	public String getDescription() {
		return beverage.getDescription() + ", 모카";
	}

	public double cost() {
		return beverage.cost() + .20;
	}

}


// 주문 시스템 
public class StarbuzzCoffee {
	
	public static void main(String args[]) {
		Beverage beverage = new Espresso();

		Beverage beverage2 = new Espresso();

        // 감싸고자 하는 음료를 생성자에 전달
		beverage = new Mocha(beverage); // Mocha로 감싼다
		beverage = new Mocha(beverage); // Mocha로 감싼다
		beverage = new Whip(beverage); // Whip으로 감싼다

		System.out.println(beverage.getDescription() + " $" + beverage.cost());
		// 에스프레소 커피 $1.99
		System.out.println(beverage.2getDescription() + " $" + beverage.cost());
		// 에스프레소 커피, 모카, 모카, 휘핑크림 $2.49
	}
}