import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function Popup() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment >
      <Button onClick={handleOpen} variant="gradient ">
        Syarat dan Ketentuan
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Syarat dan Ketentuan</DialogHeader>
        <DialogBody divider>
          <div className="w-[100%] text-black">
          <ul>
              <li><b>*</b> Berstatus sebagai mahasiswa Aktif Politeknik Negeri Jakarta.</li>
              <li><b>*</b> Keanggotaan dan biaya akan diminta untuk menjadi anggota resmi UKM Taekwondo dengan membayar biaya tertentu. Biaya ini dapat <span className="pl-[8px]">mencakup biaya administrasi, seragam, perlengkapan, dan kegiatan lainnya.</span></li>
              <li><b>*</b> Memiliki Kedisiplinan dan komitmen yang baik untuk mengikuti jadwal latihan yang telah ditentukan dan mematuhi aturan dan etika <span className="pl-[8px]">Taekwondo yang diajarkan.</span></li>
              <li><b>*</b> Partisipasi dalam kompetisi mewakili Politeknik Negeri Jakarta dalam kompetisi Taekwondo dengan mengikuti seleksi dan memenuhi <span className="pl-[8px]">persyaratan tertentu yang telah ditetapkan.</span></li>
              <li><b>*</b> Mengikuti kode etik dan perilaku yang ditetapkan oleh UKM Taekwondo dan Politeknik Negeri Jakarta baik di dalam dan di luar <span className="pl-[8px]">latihan.</span></li>
              <li><b>*</b> Anda mungkin diminta untuk memiliki perlengkapan Taekwondo yang sesuai.</li>
          </ul>
          </div>
        </DialogBody>
        <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Back</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}