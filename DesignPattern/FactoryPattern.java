// 팩토리패턴 
// 추상 팩토리 패턴 : 인터페이스를 이용하여 서로 연관된, 또는 의존하는 객체를 구상 클래스를 지정하지 않고도 생성한다.
// 팩토리 메소드 패턴 : 객체를 생성하기 위한 인터페이스를 정의하는데 어떤 클래스의 인스턴스를 만들지는 서브클래스에서 결정한다.


Pizza orderPizza(String type) {
    Pizza pizza;
    
    if (type.equals("cheese")) {
        pizza = new CheesePizza(); 
    } else if (type.equals("pepperoni")) { 
        pizza = new PepperoniPizza();
    } else if(type.equals("clam")) {
        pizza = new ClamPizza(); 
    } else if(type.equals("veggie")) {
        pizza = new VeggiePizza(); 
    }
    
    pizza.prepare(); //피자 준비
    pizza.bake();  // 피자 굽기
    pizza.cut();  //피자 자르기
    pizza.box();  // 피자 상자에 담기
    return pizza;
}


// 윗 코드는 피자 가게의 메뉴를 변경할 때마다 코드를 수정해야 한다.
// 이를 해결하기 위해 팩토리 패턴을 사용한다.

public class SimplePizzaFactory {

    public Pizza createPizza(String type) {
        Pizza pizza = null;

        if (type.equals("cheese")) {
            pizza = new CheesePizza();
        } else if (type.equals("pepperoni")) {
            pizza = new PepperoniPizza();
        } else if(type.equals("clam")) {
            pizza = new ClamPizza();
        } else if(type.equals("veggie")) {
            pizza = new VeggiePizza();
        }
    return pizza;
    }
}

public class PizzaStore {
    SimplePizzaFactory factory;

    public PizzaStore(SimplePizzaFactory factory) {
        this.factory = factory;
    }

    public Pizza orderPizza(String type) {
        Pizza pizza = factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}


// 2번째 상황은 프렌차이즈 사업을 시작한다고 가정하고, 여러가지의 팩토리를 만들어 PizzaStore에서 관리한다.
