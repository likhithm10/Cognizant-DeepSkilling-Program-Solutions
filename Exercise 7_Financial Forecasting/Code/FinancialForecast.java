package com.forecasting;

import java.util.Scanner;

public class FinancialForecast {
	
	public static double calculateValue(double presentValue, double growthRate, int years) {
	     if (years == 0) {
	         return presentValue; 
	     }
	     return (1 + growthRate) * calculateValue(presentValue, growthRate, years - 1);
	 }

	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		System.out.println("Enter Principal Value, growth rate and no.of years");
		double principalValue = s.nextDouble();
        double growthRate = s.nextDouble(); 
        int years = s.nextInt();

        double predictedValue = calculateValue(principalValue, growthRate/100, years);
        System.out.printf("Total Value after %d years: %.2f\n", years, predictedValue);

	}


}
