package io.ramenergy.expressivo;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.Set;

import io.ramenergy.expressivo.element.Division;
import io.ramenergy.expressivo.element.Multiply;
import io.ramenergy.expressivo.element.Number;
import io.ramenergy.expressivo.element.Plus;
import io.ramenergy.expressivo.element.Power;
import io.ramenergy.expressivo.element.Subtract;
import io.ramenergy.expressivo.element.Variable;
import lib6005.parser.*;

public interface Expression {

    enum IntegerGrammar {ROOT, SUM, SUBTRACTION, PRODUCT, DIVISION, POWER, PRIMITIVE, NUMBER, VARIABLE, WHITESPACE};

    public static Expression parse(String input){
        Parser<IntegerGrammar> parser = null;
        ParseTree<IntegerGrammar> tree = null;
        try {
            parser = GrammarCompiler.compile(new File("src/main/java/io/ramenergy/expressivo/Expression.g"), IntegerGrammar.ROOT);
            tree = parser.parse(input);
        } catch (UnableToParseException | IOException e) {
            e.printStackTrace();
            throw new IllegalArgumentException(e);
        }
//        tree.display();
        return Expression.buildAST(tree);
    }
    
    static Expression buildAST(ParseTree<IntegerGrammar> p){
        switch(p.getName()){

        case NUMBER:
            return new Number(Double.parseDouble(p.getContents()));
        case VARIABLE:
            return new Variable(p.getContents());   
        case PRIMITIVE:                       
            if(!p.childrenByName(IntegerGrammar.NUMBER).isEmpty()){
                return buildAST(p.childrenByName(IntegerGrammar.NUMBER).get(0)); 
            }else if(!p.childrenByName(IntegerGrammar.VARIABLE).isEmpty()){
                return buildAST(p.childrenByName(IntegerGrammar.VARIABLE).get(0));
            }else if(!p.childrenByName(IntegerGrammar.SUM).isEmpty()){
                return buildAST(p.childrenByName(IntegerGrammar.SUM).get(0));
            }
        case SUM:
            boolean first = true;
            Expression result = null;
            for(ParseTree<IntegerGrammar> child : p.childrenByName(IntegerGrammar.SUBTRACTION)){                
                if(first){
                    result = buildAST(child);
                    first = false;
                }else{
                    Expression zero = new Number(0);
                    Expression resultRight = buildAST(child);
                    if(zero.equals(result)){
                        result = resultRight;
                    }else if(!zero.equals(resultRight)){
                        result = new Plus(result, resultRight);
                    }
                }
            }
            if (first) {
                throw new RuntimeException("sum must have a non whitespace child:" + p);
            }
            return result;
        case SUBTRACTION:
            boolean firstS = true;
            Expression resultS = null;
            for(ParseTree<IntegerGrammar> child : p.childrenByName(IntegerGrammar.PRODUCT)){                
                if(firstS){
                    resultS = buildAST(child);
                    firstS = false;
                }else{
                    Expression zero = new Number(0);
                    Expression resultSRight = buildAST(child);
                    if(zero.equals(resultS)){
                        resultS = new Multiply(new Number(-1), resultSRight);
                    }else if(!zero.equals(resultSRight)){
                        resultS = new Subtract(resultS, resultSRight);
                    }
                }
            }
            if (firstS) {
                throw new RuntimeException("subtraction must have a non whitespace child:" + p);
            }
            return resultS;    
        case PRODUCT:
            boolean firstM = true;
            Expression resultM = null;
            for(ParseTree<IntegerGrammar> child : p.childrenByName(IntegerGrammar.DIVISION)){                
                if(firstM){
                    resultM = buildAST(child);
                    firstM = false;
                }else{
                    Expression zero = new Number(0);
                    if(zero.equals(resultM)){
                        return zero;}
                    
                    Expression one = new Number(1);
                    Expression resultMRight = buildAST(child);
                    if(zero.equals(resultMRight)){
                        return zero;}
                    
                    if(one.equals(resultM)){
                        resultM = resultMRight;
                    }else if(!one.equals(resultMRight)){
                        resultM = new Multiply(resultM, resultMRight);
                    }
                }
            }
            if (firstM) {
                throw new RuntimeException("product must have a non whitespace child:" + p);
            }
            return resultM;
        case DIVISION:
            boolean firstD = true;
            Expression resultD = null;
            for(ParseTree<IntegerGrammar> child : p.childrenByName(IntegerGrammar.POWER)){                
                if(firstD){
                    resultD = buildAST(child);
                    firstD = false;
                }else{
                    Expression zero = new Number(0);
                    if(zero.equals(resultD)){return zero;}
                    
                    Expression one = new Number(1);
                    Expression resultDRight = buildAST(child);
                    if(zero.equals(resultDRight)){
                        throw new ArithmeticException("Divide by 0");
                    }
                    
                    if(!one.equals(resultDRight)){
                        resultD = new Division(resultD, resultDRight);
                    }
                }
            }
            if (firstD) {
                throw new RuntimeException("division must have a non whitespace child:" + p);
            }
            return resultD;
        case POWER:
            boolean firstP = true;
            Expression resultP = null;
            for(ParseTree<IntegerGrammar> child : p.childrenByName(IntegerGrammar.PRIMITIVE)){                
                if(firstP){
                    resultP = buildAST(child);
                    firstP = false;
                }else{
                    Expression resultPRight = buildAST(child);
                    resultP = new Power(resultP, resultPRight);
                }
            }
            if (firstP) {
                throw new RuntimeException("power must have a non whitespace child:" + p);
            }
            return resultP;
        case ROOT:
            return buildAST(p.childrenByName(IntegerGrammar.SUM).get(0));
        case WHITESPACE:
            throw new RuntimeException("You should never reach here:" + p);
        }   
        throw new RuntimeException("You should never reach here:" + p);
    }
    
    @Override 
    public String toString();

    @Override
    public boolean equals(Object thatObject);
    
    @Override
    public int hashCode();
    
    public Expression differentiate(Variable var);
    public String simplify(Map<String,Double> environment);
    public Double value(Map<String,Double> environment) throws NullPointerException;
    public Set<String> allVariables(Set<String> currentSet);
}
