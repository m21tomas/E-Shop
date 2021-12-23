package lt.itmokymai.spring;

public class Vakcina {
	private String vakcinos_tipas;
	private String Uzsakymo_data;
	private String Vakcinacijos_centras;
	public Vakcina(String vakcinos_tipas, String uzsakymo_data, String vakcinacijos_centras) {
		super();
		this.vakcinos_tipas = vakcinos_tipas;
		Uzsakymo_data = uzsakymo_data;
		Vakcinacijos_centras = vakcinacijos_centras;
	}
	public String getVakcinos_tipas() {
		return vakcinos_tipas;
	}
	public void setVakcinos_tipas(String vakcinos_tipas) {
		this.vakcinos_tipas = vakcinos_tipas;
	}
	public String getUzsakymo_data() {
		return Uzsakymo_data;
	}
	public void setUzsakymo_data(String uzsakymo_data) {
		Uzsakymo_data = uzsakymo_data;
	}
	public String getVakcinacijos_centras() {
		return Vakcinacijos_centras;
	}
	public void setVakcinacijos_centras(String vakcinacijos_centras) {
		Vakcinacijos_centras = vakcinacijos_centras;
	}
	
	@Override
	public String toString() {
		return "Vakcina [vakcinos_tipas=" + vakcinos_tipas + ", Uzsakymo_data=" + Uzsakymo_data
				+ ", Vakcinacijos_centras=" + Vakcinacijos_centras + "]";
	}
	
}
