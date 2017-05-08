package io.ramenergy.expressivo;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Random;
import java.util.Set;

public class Logic {
    
    public static boolean compare(String aStr, String bStr){
        Expression a = Expression.parse(aStr);
        Expression b = Expression.parse(bStr);
        Set<String> aVariables = new HashSet<>();
        Set<String> bVariables = new HashSet<>();
        aVariables = a.allVariables(aVariables);
        bVariables = b.allVariables(bVariables);
        if(!aVariables.equals(bVariables)){
            return false;
        }
        return compareByExpression(a, b, aVariables);
    }
    
    public static boolean compareByExpression(Expression a, Expression b, Set<String> variables){
        Random randomize = new Random();
        int checkTimes = 5;
        double ea = 10e-7;
        
        for(int check = 0; check < checkTimes; check++){
            Map<String,Double> envir = new HashMap<>();
            for(String var : variables){
                double num = randomize.nextGaussian();
                envir.put(var, num);
            }
            try{
                Double valueA = a.value(envir);
                Double valueB = b.value(envir);
                if(Math.abs(valueA-valueB) > ea){
                    return false;
                }
            }catch(NullPointerException e){
                return false;
            }
        }
        return true;
    }
}
