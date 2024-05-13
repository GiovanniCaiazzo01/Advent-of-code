use std::{ fs::File, io::{ BufRead, BufReader } };

fn main() -> std::io::Result<()> {
    const CAP: usize = 1024 * 128;
    let file = File::open("./input.txt")?;
    let reader = BufReader::with_capacity(CAP, file);

    for line in reader.lines() {
        let line = line?; // Gestisce l'eventuale errore di lettura
        println!("{}", line);
    }

    Ok(())
}
