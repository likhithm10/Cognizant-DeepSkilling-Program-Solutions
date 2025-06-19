package com.week1.factorypattern;

public class PdfDocument implements Document {

	@Override
	public void openDocument() {
		System.out.println("Pdf Document created");
		
	}

}
