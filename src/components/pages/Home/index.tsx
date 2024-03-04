'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Sidebar from '@/components/elements/Sidebar';
import images from '@/configs/images';
import Modal from '@/components/elements/Modal';
import EducationForm from '@/components/elements/Forms/EducationForm';
import { getUniversities } from '@/services/university';
import { getEducations, addEducation, deleteEducation } from '@/services/education';
import { uuid } from '@/utils/text';
import ListCard from '@/components/elements/ListCard';
import Alert from '@/components/elements/Alert';
import { getAuthName } from '@/utils/auth';

export default function Home() {
  const queryClient = useQueryClient();
  const [isModal, setModal] = useState(false);
  const [searchUni, setSearchUni] = useState('');
  const [mappedUniversities, setMappedUniversities] = useState([]);
  const [showAlert, setShowalert] = useState(false);
  const [loadingUniverity, setLoadingUniverity] = useState(true);
  const [messageAlert, setMessageAlert] = useState('');
  const [auth, setAuthName] = useState('');

  if (!getAuthName()) {
    redirect('/');
  }

  useEffect(() => {
    setAuthName(getAuthName());

    return () => {
      setAuthName('');
    }
  }, [auth]);

  const {
    data: universities,
    refetch
  } = useQuery(['universities', searchUni], () => getUniversities(searchUni), {
    onSuccess: (data) => {
      const mappedData = data.map((uni:any) => ({ value: uni.name, label: uni.name }));
      setMappedUniversities(mappedData);
      setLoadingUniverity(false);
    },
    enabled: false
  });

  const {
    data: educations
  } = useQuery('educations', getEducations, {
    select: data => data.sort((a:any, b:any) => b.id - a.id)
  });

  const addEduMutate = useMutation(addEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries('educations');
      setMessageAlert('Success adding new education');
      setShowalert(true);
      onShowAlert();
    },
    onError: () => {
      queryClient.invalidateQueries("educations");
      setMessageAlert('Success adding new education');
      setShowalert(true);
      onShowAlert();
    },
  });

  const deleteEduMutate = useMutation(deleteEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries('educations');
      setMessageAlert('Success deleting education');
      setShowalert(true);
      onShowAlert();
    },
    onError: () => {
      queryClient.invalidateQueries("educations");
      setMessageAlert('Success deleting education');
      setShowalert(true);
      onShowAlert();
    },
  });

  const onShowAlert = () => {
    setTimeout(() => setShowalert(false), 3000);
  };

  const onSearchUniversity = useCallback(async (value: any) => {
    try {
      setLoadingUniverity(true);
      await setSearchUni(value);
    } catch (error) {
      throw error;
    } finally {
      setLoadingUniverity(true);
    }
    refetch();
  }, [setSearchUni, refetch]);

  const handleSubmit:any = (values:any) => {
    if (values) {
      addEduMutate.mutate({
        id: uuid,
        schoolName: values?.schoolName,
        degree: values?.degree,
        fieldStudy: values?.fieldStudy,
        grade: values?.grade,
        startYear: values?.startYear,
        endYear: values?.endYear,
        description: values?.description
      });
    }
  };

  const handleDelete = (id:any) => {
    if (id) deleteEduMutate.mutate({id});
  };

  const onCancel = () => setModal(isModal => !isModal);

  return (
    <>
      <Sidebar />
      <div className="flex-1 md:ml-[300px] p-4">
        <section className="rounded-lg bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-20">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to {`${auth}'s`} education page.</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias officia eum facilis doloribus architecto ipsum voluptatem dolorem temporibus! Eligendi ipsa velit porro ratione? Dolores quam voluptatibus id nihil vero?</p>
                    <button onClick={() => setModal(true)} type="button" className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mb-2">Add New Education</button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image className="w-full rounded-lg bg-red-50" src={images.success} alt="success-illustration" priority={true} width={200} height={200} />
                    <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={images.resume} alt="resume-illustration" width={200} height={200} />
                </div>
            </div>
        </section>

        {showAlert ? <Alert title={messageAlert} /> : ''}

        <div className="h-8"></div>
        <section className="rounded-lg bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-8 px-10 mx-auto">
            <h2 className="sr-only">list education</h2>
            {educations?.map((item:any,index:any) => (
              <React.Fragment key={index}>
                <ListCard
                  data={item}
                  onDelete={() => handleDelete(item?.id)}
                  title="List Educations"
                  imgUrl={images.education}
                />
              </React.Fragment>
            ))}
          </div>
        </section>
        <Modal
          isOpen={isModal}
          title="New Education Modal"
          txtSubmit="Save"
          txtCancel="Cancel"
          onSubmit={() => alert('submit')}
          onCancel={() => setModal(!isModal)}
          onClose={() => setModal(!isModal)}
        >
          <EducationForm
            universities={mappedUniversities}
            onSearchOption={onSearchUniversity}
            isLoadUniveristy={loadingUniverity}
            onCancel={onCancel}
            onSubmit={handleSubmit}
          />
        </Modal>
      </div>
    </>
  )
}
